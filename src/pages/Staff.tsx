import { useState } from "react";
import { Link } from "react-router-dom";
import principalPhoto from "@/assets/WhatsApp Image 2026-04-10 at 2.37.04 PM.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingShapes from "@/components/FloatingShapes";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  GraduationCap, CalendarDays, Building2,
  Users, Star, Briefcase, Clock,
  Hash, ChevronDown, ChevronUp, BadgeCheck, Anchor, UserCheck, X, ZoomIn,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = "headmaster" | "teacher" | "assistant" | "nonteaching";

interface StaffMember {
  serial: number | string;
  nameGu: string;
  nameEn: string;
  designationGu: string;
  designationEn: string;
  qualAcademic: string;
  qualProfessional: string;
  joiningDate: string;
  institutionJoiningDate: string;
  retirementDate: string;
  cpf: string;
  gpf: string;
  bankAccount: string;
  employeeNo: string;
  paNo: string;
  role: Role;
}

// ─── Staff Data ───────────────────────────────────────────────────────────────

const STAFF_MEMBERS: StaffMember[] = [
  // ── Teaching Staff ──
  {
    serial: 1,
    nameGu: "શ્રી જયેશકુમાર આર. પટેલ",
    nameEn: "Shri Jayeshkumar R. Patel",
    designationGu: "આચાર્ય",
    designationEn: "Principal (Acharya)",
    qualAcademic: "M.Sc., B.Ed.",
    qualProfessional: "",
    joiningDate: "01/01/2002",
    institutionJoiningDate: "29/08/2023",
    retirementDate: "30/10/2034",
    cpf: "20080604682236070",
    gpf: "",
    bankAccount: "21700000000",
    employeeNo: "6350",
    paNo: "ANUPP 3416G",
    role: "headmaster",
  },
  {
    serial: 2,
    nameGu: "શ્રીમતી દક્ષાબેન એમ. પટેલ",
    nameEn: "Shrimati Daxaben M. Patel",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "B.A.",
    qualProfessional: "B.Ed.",
    joiningDate: "09/04/1999",
    institutionJoiningDate: "09/04/1999",
    retirementDate: "31/05/2030",
    cpf: "–",
    gpf: "8299",
    bankAccount: "19800100004313",
    employeeNo: "5744",
    paNo: "AGLPP 6262A",
    role: "teacher",
  },
  {
    serial: 3,
    nameGu: "શ્રી ભગવાનભાઈ જી. ચૌધરી",
    nameEn: "Shri Bhagwanbhai G. Chaudhari",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.A.",
    qualProfessional: "B.Ed.",
    joiningDate: "26/02/2004",
    institutionJoiningDate: "26/02/2004",
    retirementDate: "31/10/2035",
    cpf: "20100604268820011",
    gpf: "",
    bankAccount: "19800100011483",
    employeeNo: "7138",
    paNo: "AMGPC 6978K",
    role: "teacher",
  },
  {
    serial: 4,
    nameGu: "શ્રીમતી કલ્પનાબેન જી. ભીમાણી",
    nameEn: "Shrimati Kalpanaben G. Bhimani",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.Sc.",
    qualProfessional: "B.Ed.",
    joiningDate: "28/02/2004",
    institutionJoiningDate: "28/02/2004",
    retirementDate: "31/05/2034",
    cpf: "20100604268820016",
    gpf: "",
    bankAccount: "19800100011384",
    employeeNo: "7131",
    paNo: "ALIPB 0029M",
    role: "teacher",
  },
  {
    serial: 5,
    nameGu: "શ્રી ચેતનસિંહ જી. રાઠોડ",
    nameEn: "Shri Chetansinh G. Rathod",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.Sc.",
    qualProfessional: "B.Ed.",
    joiningDate: "13/06/2005",
    institutionJoiningDate: "13/06/2005",
    retirementDate: "31/05/2033",
    cpf: "20210604268200499",
    gpf: "",
    bankAccount: "19800100013763",
    employeeNo: "7360",
    paNo: "AZCPR 3392R",
    role: "teacher",
  },
  {
    serial: 6,
    nameGu: "શ્રી હિતેશકુમાર એ. પટેલ",
    nameEn: "Shri Hiteshkumar A. Patel",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "B.A.",
    qualProfessional: "A.T.D.",
    joiningDate: "14/08/2008",
    institutionJoiningDate: "14/08/2008",
    retirementDate: "31/10/2041",
    cpf: "30150604268200274",
    gpf: "",
    bankAccount: "19800100076449",
    employeeNo: "7847",
    paNo: "BEWPP 5811D",
    role: "teacher",
  },
  {
    serial: 7,
    nameGu: "શ્રી રાજેન્દ્રકુમાર ઝ. મકવાણા",
    nameEn: "Shri Rajendrakumar Z. Makwana",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "B.A.",
    qualProfessional: "A.T.D.",
    joiningDate: "01/06/1995",
    institutionJoiningDate: "01/11/2024",
    retirementDate: "31/10/2028",
    cpf: "–",
    gpf: "7707",
    bankAccount: "19864589374",
    employeeNo: "1521",
    paNo: "ADKPM 1779P",
    role: "teacher",
  },
  {
    serial: 8,
    nameGu: "શ્રીમતી વંદનાબેન એ. ચૌધરી",
    nameEn: "Shrimati Vandanaben A. Chaudhari",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.A.",
    qualProfessional: "D.Bed.",
    joiningDate: "22/12/2016",
    institutionJoiningDate: "01/05/2025",
    retirementDate: "31/05/2035",
    cpf: "20240604272220068",
    gpf: "",
    bankAccount: "2710100004609",
    employeeNo: "8855",
    paNo: "ASZPC 6198E",
    role: "teacher",
  },
  {
    serial: 9,
    nameGu: "શ્રી રમેશભાઈ કે. ચડોતરા",
    nameEn: "Shri Rameshbhai K. Chadotra",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.A.",
    qualProfessional: "B.Ed.",
    joiningDate: "28/09/2006",
    institutionJoiningDate: "01/05/2025",
    retirementDate: "31/05/2040",
    cpf: "20190604268200070",
    gpf: "",
    bankAccount: "2160100022353",
    employeeNo: "7567",
    paNo: "ASFPC 0264K",
    role: "teacher",
  },
  {
    serial: 10,
    nameGu: "શ્રીમતી ઉષ્માબહેન જે. પંડ્યા",
    nameEn: "Shrimati Ushmaben J. Pandya",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.Com.",
    qualProfessional: "B.Ed.",
    joiningDate: "26/06/2014",
    institutionJoiningDate: "16/04/2025",
    retirementDate: "31/05/2040",
    cpf: "20200604268200053",
    gpf: "",
    bankAccount: "33333587414",
    employeeNo: "8223",
    paNo: "A2PB 1303G",
    role: "teacher",
  },
  {
    serial: 11,
    nameGu: "શ્રી પ્રવિણકુમાર આર. સોલંકી",
    nameEn: "Shri Pravinkumar R. Solanki",
    designationGu: "મ.શિ. (માધ્યમિક શિક્ષક)",
    designationEn: "Secondary Teacher",
    qualAcademic: "M.A.",
    qualProfessional: "B.Ed.",
    joiningDate: "14/12/2016",
    institutionJoiningDate: "01/05/2025",
    retirementDate: "31/05/2040",
    cpf: "20240604285200012",
    gpf: "",
    bankAccount: "30399301008",
    employeeNo: "8856",
    paNo: "CVYP5 4506G",
    role: "teacher",
  },
  {
    serial: 12,
    nameGu: "શ્રીમતી મિતાલીબેન એમ. પટેલ",
    nameEn: "Shrimati Mitaliben M. Patel",
    designationGu: "શિ.સ. (શિક્ષણ સહાયક)",
    designationEn: "Teaching Assistant",
    qualAcademic: "M.Com.",
    qualProfessional: "B.Ed.",
    joiningDate: "09/07/2025",
    institutionJoiningDate: "09/07/2025",
    retirementDate: "31/05/2050",
    cpf: "",
    gpf: "",
    bankAccount: "19800100043110",
    employeeNo: "9047",
    paNo: "BPOPP 6664P",
    role: "assistant",
  },
  {
    serial: 13,
    nameGu: "શ્રીમતી હેમાલીબેન બી. ગોળ",
    nameEn: "Shrimati Hemaliben B. Gol",
    designationGu: "શિ.સ. (શિક્ષણ સહાયક)",
    designationEn: "Teaching Assistant",
    qualAcademic: "M.A.",
    qualProfessional: "B.Ed.",
    joiningDate: "09/07/2025",
    institutionJoiningDate: "09/07/2025",
    retirementDate: "31/05/2051",
    cpf: "",
    gpf: "",
    bankAccount: "23370100011010",
    employeeNo: "9046",
    paNo: "CHWPG 7440R",
    role: "assistant",
  },
  // ── Non-teaching Staff ──
  {
    serial: "–",
    nameGu: "શ્રી નરેશભાઈ એમ. બારીયા",
    nameEn: "Shri Nareshbhai M. Bariya",
    designationGu: "જુ.કલાર્ક (Junior Clerk)",
    designationEn: "Junior Clerk",
    qualAcademic: "H.S.C.",
    qualProfessional: "",
    joiningDate: "25/08/2008",
    institutionJoiningDate: "25/08/2008",
    retirementDate: "31/10/2046",
    cpf: "20150604268200018",
    gpf: "",
    bankAccount: "19800100026450",
    employeeNo: "7947",
    paNo: "BRSPB 13B7B",
    role: "nonteaching",
  },
  {
    serial: "–",
    nameGu: "શ્રીમતી શીતલબેન પી. ઠાકોર",
    nameEn: "Shrimati Shitalben P. Thakor",
    designationGu: "સેવિકા (Attendant)",
    designationEn: "Attendant (Sevika)",
    qualAcademic: "S.S.C. (F)",
    qualProfessional: "",
    joiningDate: "02/07/2001",
    institutionJoiningDate: "02/07/2001",
    retirementDate: "31/10/2040",
    cpf: "20080604268200008",
    gpf: "",
    bankAccount: "19800100009173",
    employeeNo: "6194",
    paNo: "DAOPP 3496N",
    role: "nonteaching",
  },
];

// ─── Role Config ──────────────────────────────────────────────────────────────

const ROLE_CONFIG: Record<Role, {
  avatarBg: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
  topStripe: string;
  ringColor: string;
  idBg: string;
}> = {
  headmaster: {
    avatarBg:    "bg-gradient-to-br from-amber-400 to-orange-500",
    badgeBg:     "bg-amber-100",
    badgeText:   "text-amber-800",
    borderAccent:"border-amber-200",
    topStripe:   "from-amber-400 to-orange-500",
    ringColor:   "ring-amber-300",
    idBg:        "bg-amber-50 border-amber-100",
  },
  teacher: {
    avatarBg:    "bg-gradient-to-br from-blue-500 to-indigo-600",
    badgeBg:     "bg-blue-100",
    badgeText:   "text-blue-800",
    borderAccent:"border-blue-200",
    topStripe:   "from-blue-500 to-indigo-600",
    ringColor:   "ring-blue-300",
    idBg:        "bg-blue-50 border-blue-100",
  },
  assistant: {
    avatarBg:    "bg-gradient-to-br from-purple-500 to-violet-600",
    badgeBg:     "bg-purple-100",
    badgeText:   "text-purple-800",
    borderAccent:"border-purple-200",
    topStripe:   "from-purple-500 to-violet-600",
    ringColor:   "ring-purple-300",
    idBg:        "bg-purple-50 border-purple-100",
  },
  nonteaching: {
    avatarBg:    "bg-gradient-to-br from-teal-500 to-emerald-600",
    badgeBg:     "bg-teal-100",
    badgeText:   "text-teal-800",
    borderAccent:"border-teal-200",
    topStripe:   "from-teal-500 to-emerald-600",
    ringColor:   "ring-teal-300",
    idBg:        "bg-teal-50 border-teal-100",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  const parts = name.split(" ").filter((w) => w.length > 0);
  return parts
    .slice(1, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || parts[0]?.[0]?.toUpperCase() || "?";
}

// ─── Staff Card ───────────────────────────────────────────────────────────────

interface StaffCardProps {
  member: StaffMember;
  lang: string;
}

const StaffCard = ({ member, lang }: StaffCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = ROLE_CONFIG[member.role];
  const name = lang === "gu" ? member.nameGu : member.nameEn;
  const altName = lang === "gu" ? member.nameEn : member.nameGu;
  const designation = lang === "gu" ? member.designationGu : member.designationEn;

  const hasIdInfo = member.gpf || member.employeeNo;

  return (
    <div className={`bg-card rounded-2xl border ${cfg.borderAccent} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col`}>
      {/* Top stripe */}
      <div className={`h-1.5 bg-gradient-to-r ${cfg.topStripe}`} />

      <div className="p-5 flex flex-col gap-3.5 flex-1">

        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-11 h-11 rounded-xl ${cfg.avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
            {getInitials(member.nameEn)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading font-semibold text-foreground leading-tight">{name}</p>
            <p className="font-gujarati text-[11px] text-muted-foreground mt-0.5 truncate">{altName}</p>
            <span className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${cfg.badgeBg} ${cfg.badgeText}`}>
              {designation}
            </span>
          </div>
          {/* Employee No badge */}
          {member.employeeNo && (
            <div className="shrink-0 flex flex-col items-center">
              <span className="text-[10px] text-muted-foreground font-medium">
                {lang === "gu" ? "એ.નં." : "Emp."}
              </span>
              <span className="font-mono text-xs font-bold text-foreground/70">{member.employeeNo}</span>
            </div>
          )}
        </div>

        {/* Qualifications */}
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 flex-1 bg-muted/40 rounded-lg px-3 py-2 text-xs">
            <GraduationCap className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <div>
              <span className="text-[10px] text-muted-foreground block">{lang === "gu" ? "શૈ.લાયકાત" : "Academic"}</span>
              <span className="font-semibold text-foreground">{member.qualAcademic}</span>
            </div>
          </div>
          {member.qualProfessional && (
            <div className="flex items-center gap-1.5 flex-1 bg-muted/40 rounded-lg px-3 py-2 text-xs">
              <BadgeCheck className="w-3.5 h-3.5 shrink-0 text-primary/60" />
              <div>
                <span className="text-[10px] text-muted-foreground block">{lang === "gu" ? "વ્ય.લાયકાત" : "Professional"}</span>
                <span className="font-semibold text-foreground">{member.qualProfessional}</span>
              </div>
            </div>
          )}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
          {[
            { icon: Briefcase,    labelGu: "સેવા જોડાણ",    labelEn: "Joined Service",  val: member.joiningDate },
            { icon: Building2,    labelGu: "સંસ્થા જોડાણ",  labelEn: "Joined Here",     val: member.institutionJoiningDate },
            { icon: CalendarDays, labelGu: "નિવૃત્તિ",       labelEn: "Retirement",      val: member.retirementDate },
          ].map((d) => (
            <div key={d.labelEn} className="flex flex-col gap-0.5 bg-muted/30 rounded-lg p-2">
              <span className="flex items-center gap-1 text-muted-foreground font-medium">
                <d.icon className="w-2.5 h-2.5 shrink-0" />
                {lang === "gu" ? d.labelGu : d.labelEn}
              </span>
              <span className="font-bold text-foreground">{d.val}</span>
            </div>
          ))}
        </div>

        {/* Expandable ID Details */}
        {hasIdInfo && (
          <div className="border-t border-border/50 pt-3 mt-auto">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center justify-between w-full text-[11px] text-muted-foreground hover:text-foreground transition-colors font-medium group"
            >
              <span className="flex items-center gap-1.5">
                <Hash className="w-3 h-3" />
                {lang === "gu" ? "ઓળખ વિગતો" : "ID Details"}
              </span>
              {expanded
                ? <ChevronUp className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
                : <ChevronDown className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
              }
            </button>

            {expanded && (
              <div className={`mt-2.5 rounded-xl border p-3 ${cfg.idBg} grid grid-cols-1 gap-2 text-[11px]`}>
                {[
                  { label: lang === "gu" ? "એ.નં."   : "Emp. No.", val: member.employeeNo },
                ]
                  .filter((row) => row.val && row.val !== "–" && row.val !== "")
                  .map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-2">
                      <span className="text-muted-foreground shrink-0 font-medium">{row.label}</span>
                      <span className="font-mono font-semibold text-foreground/80 truncate text-right">{row.val}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Principal History ────────────────────────────────────────────────────────

type PrincipalType = "full" | "incharge" | "current" | "vacant";

interface PrincipalRecord {
  serial: number;
  nameGu: string;
  nameEn: string;
  qualGu: string;
  qualEn: string;
  tenureGu: string;
  tenureEn: string;
  type: PrincipalType;
}

const PRINCIPAL_HISTORY: PrincipalRecord[] = [
  {
    serial: 1,
    nameGu: "શ્રી પ્રવિણભાઈ એસ. વ્યાસ",
    nameEn: "Shri Pravinbhai S. Vyas",
    qualGu: "B.A., B.Ed.",
    qualEn: "B.A., B.Ed.",
    tenureGu: "૧૨-૫-૬૭ થી ૧૧-૫-૭૨",
    tenureEn: "12-05-1967 to 11-05-1972",
    type: "full",
  },
  {
    serial: 2,
    nameGu: "શ્રી શાંતિલાલ એચ. પટેલ",
    nameEn: "Shri Shantilal H. Patel",
    qualGu: "B.Sc., B.Ed.",
    qualEn: "B.Sc., B.Ed.",
    tenureGu: "૧૨-૫-૭૨ થી ૨૦-૫-૭૩",
    tenureEn: "12-05-1972 to 20-05-1973",
    type: "full",
  },
  {
    serial: 3,
    nameGu: "શ્રી નાગજીભાઈ આઈ. પટેલ",
    nameEn: "Shri Nagjibhai I. Patel",
    qualGu: "B.Sc., M.Ed.",
    qualEn: "B.Sc., M.Ed.",
    tenureGu: "૧૧-૫-૭૩ થી ૧૪-૪-૮૧",
    tenureEn: "11-05-1973 to 14-04-1981",
    type: "full",
  },
  {
    serial: 4,
    nameGu: "ડૉ. માણીભાઈ એસ. પટેલ",
    nameEn: "Dr. Manibhai S. Patel",
    qualGu: "B.Sc., M.Ed. [Ph.D]",
    qualEn: "B.Sc., M.Ed. [Ph.D]",
    tenureGu: "૧-૭-૮૧ થી ૩૧-૧૦-૯૬",
    tenureEn: "01-07-1981 to 31-10-1996",
    type: "full",
  },
  {
    serial: 5,
    nameGu: "શ્રી શશીકાન્ત એ. જોષી (ઇ.આ.)",
    nameEn: "Shri Shashikant A. Joshi (In-charge)",
    qualGu: "P.H.C (શાસ્ત્રી) આચાર્ય B.Ed.",
    qualEn: "P.H.C (Shastri), B.Ed.",
    tenureGu: "૧-૧૧-૯૬ થી ૩૧-૫-૯૭",
    tenureEn: "01-11-1996 to 31-05-1997",
    type: "incharge",
  },
  {
    serial: 6,
    nameGu: "શ્રીમતી કલાબેન એ. પટેલ",
    nameEn: "Shrimati Kalaben A. Patel",
    qualGu: "M.A., B.Ed.",
    qualEn: "M.A., B.Ed.",
    tenureGu: "૯-૫-૯૭ થી ૨૨-૧૦-૯૭",
    tenureEn: "09-05-1997 to 22-10-1997",
    type: "full",
  },
  {
    serial: 7,
    nameGu: "શ્રી અર્જુનસિંહ કે. રાઉળજી",
    nameEn: "Shri Arjunsinh K. Raulji",
    qualGu: "M.Sc., B.Ed.",
    qualEn: "M.Sc., B.Ed.",
    tenureGu: "૨૩-૧૦-૯૭ થી ૩૧-૧૦-૦૯",
    tenureEn: "23-10-1997 to 31-10-2009",
    type: "full",
  },
  {
    serial: 8,
    nameGu: "શ્રી ઠાકોરભાઈ એચ. પટેલ (ઇ.આ.)",
    nameEn: "Shri Thakorbhai H. Patel (In-charge)",
    qualGu: "B.A., B.Ed.",
    qualEn: "B.A., B.Ed.",
    tenureGu: "૧-૧૧-૦૯ થી ૧૫-૬-૨૦૧૨",
    tenureEn: "01-11-2009 to 15-06-2012",
    type: "incharge",
  },
  {
    serial: 9,
    nameGu: "શ્રી કિરીટસિંહ કે. સોલંકી",
    nameEn: "Shri Kiritsinh K. Solanki",
    qualGu: "M.Sc., B.Ed.",
    qualEn: "M.Sc., B.Ed.",
    tenureGu: "૧૩-૬-૨૦૧૨ થી ૦૬-૦૭-૨૦૧૯",
    tenureEn: "13-06-2012 to 06-07-2019",
    type: "full",
  },
  {
    serial: 10,
    nameGu: "શ્રીમતી કાંતાબેન એમ. પટેલ (ઇ.આ.)",
    nameEn: "Shrimati Kantaben M. Patel (In-charge)",
    qualGu: "M.A., B.Ed.",
    qualEn: "M.A., B.Ed.",
    tenureGu: "૦૬-૦૭-૨૦૧૯ થી ૧૧-૨-૨૦૨૨",
    tenureEn: "06-07-2019 to 11-02-2022",
    type: "incharge",
  },
  {
    serial: 11,
    nameGu: "શ્રી હિતેશકુમાર એ. પટેલ (ઇ.આ.)",
    nameEn: "Shri Hiteshkumar A. Patel (In-charge)",
    qualGu: "B.A., A.T.D.",
    qualEn: "B.A., A.T.D.",
    tenureGu: "૧૨-૦૨-૨૦૨૨ થી ૨૬-૦૬-૨૦૨૩",
    tenureEn: "12-02-2022 to 26-06-2023",
    type: "incharge",
  },
  {
    serial: 12,
    nameGu: "શ્રી જયેશકુમાર આર. પટેલ",
    nameEn: "Shri Jayeshkumar R. Patel",
    qualGu: "M.Sc., B.Ed.",
    qualEn: "M.Sc., B.Ed.",
    tenureGu: "૨૬-૬-૨૦૨૩ થી હાલ",
    tenureEn: "26-06-2023 — Present",
    type: "current",
  },
];

// ─── Derived groups ───────────────────────────────────────────────────────────

const headmasterList  = STAFF_MEMBERS.filter((m) => m.role === "headmaster");
const teachers        = STAFF_MEMBERS.filter((m) => m.role === "teacher");
const assistants      = STAFF_MEMBERS.filter((m) => m.role === "assistant");
const nonTeaching     = STAFF_MEMBERS.filter((m) => m.role === "nonteaching");
const totalTeaching   = headmasterList.length + teachers.length + assistants.length;

// ─── Page ─────────────────────────────────────────────────────────────────────

const Staff = () => {
  const { t, lang } = useLanguage();
  const hm = headmasterList[0];
  const hmCfg = ROLE_CONFIG["headmaster"];
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <div className="pt-20 lg:pt-0 pb-16 lg:pb-0">

      {/* ── Hero ── */}
      <section className="page-header py-20 sm:py-28 relative overflow-hidden">
        <FloatingShapes variant="dark" density="medium" />
        <div className="section-container relative z-10">
          <AnimatedSection>
            <span className="section-label text-primary-foreground/40 before:bg-secondary/60">
              {t("શાળા પરિવાર", "School Family")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5 max-w-2xl">
              {t("સ્ટાફ લીસ્ટ", "Staff Directory")}
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/60 max-w-xl leading-relaxed mb-10">
              {t(
                "સેવાસી હાઈ સ્કૂલ, સેવાસીના સમર્પિત શિક્ષક-શિક્ષિકાઓ અને સ્ટાફ સભ્યોનો પરિચય.",
                "Meet the dedicated educators and staff members of Sevasi High School, Sevasi."
              )}
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
              {[
                { icon: Users,         value: `${STAFF_MEMBERS.length}`, labelGu: "કુલ સ્ટાફ",      labelEn: "Total Staff" },
                { icon: Star,          value: "1",                        labelGu: "આચાર્ય",          labelEn: "Principal" },
                { icon: GraduationCap, value: `${totalTeaching - 1}`,    labelGu: "શિક્ષક-શિ.",      labelEn: "Teachers" },
                { icon: Briefcase,     value: `${nonTeaching.length}`,   labelGu: "બિન-શૈ. સ્ટાફ", labelEn: "Non-teaching" },
              ].map((s) => (
                <div key={s.labelEn} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary-foreground/70" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary-foreground">{s.value}</p>
                    <p className="text-xs text-primary-foreground/50">{lang === "gu" ? s.labelGu : s.labelEn}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trustees link */}
            <Link
              to="/trustees"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground text-sm font-semibold transition-colors duration-200 border border-primary-foreground/20"
            >
              {t("ટ્રસ્ટી મંડળ જુઓ →", "View Board of Trustees →")}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Principal / Acharya ── */}
      <section className="section-padding bg-background relative">
        <div className="section-container">
          <AnimatedSection>
            <span className="section-label">{t("આચાર્ય", "Principal")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-8">
              {t("આચાર્યશ્રી", "School Principal")}
            </h2>

            {/* ── Hero photo + info ── */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">

              {/* Portrait — click to enlarge */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <button
                  onClick={() => setPhotoOpen(true)}
                  className={`group relative block rounded-3xl overflow-hidden shadow-2xl ring-4 ${hmCfg.ringColor} focus:outline-none focus-visible:ring-offset-2 w-full sm:w-60`}
                  style={{ aspectRatio: "4/5" }}
                  aria-label="Enlarge photo"
                >
                  <img
                    src={principalPhoto}
                    alt={hm.nameEn}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover zoom hint */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </button>

                {/* Designation pill beneath photo */}
                <div className="mt-3 text-center">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${hmCfg.badgeBg} ${hmCfg.badgeText}`}>
                    {lang === "gu" ? hm.designationGu : hm.designationEn}
                  </span>
                </div>
              </div>

              {/* ── Lightbox ── */}
              {photoOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                  onClick={() => setPhotoOpen(false)}
                >
                  <div
                    className="relative max-w-sm w-full sm:max-w-md"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={principalPhoto}
                      alt={hm.nameEn}
                      className="w-full rounded-2xl shadow-2xl object-cover"
                    />
                    {/* Name strip */}
                    <div className="absolute bottom-0 inset-x-0 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                      <p className="text-white font-bold text-lg leading-tight">
                        {lang === "gu" ? hm.nameGu : hm.nameEn}
                      </p>
                      <p className="text-white/70 text-sm">
                        {lang === "gu" ? hm.designationGu : hm.designationEn}
                      </p>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setPhotoOpen(false)}
                      className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:bg-muted transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0 pt-2">
                <p className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
                  {lang === "gu" ? hm.nameGu : hm.nameEn}
                </p>
                <p className="text-lg text-muted-foreground mt-1 mb-5">
                  {lang === "gu" ? hm.nameEn : hm.nameGu}
                </p>

                {/* Qual chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    {hm.qualAcademic}
                  </span>
                  {hm.qualProfessional && (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                      <BadgeCheck className="w-4 h-4" />
                      {hm.qualProfessional}
                    </span>
                  )}
                  {hm.employeeNo && (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-muted text-muted-foreground font-mono">
                      #{hm.employeeNo}
                    </span>
                  )}
                </div>

                {/* Date chips */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { icon: Briefcase,    labelGu: "સેવા જોડાણ",   labelEn: "Joined Service",  val: hm.joiningDate },
                    { icon: Building2,    labelGu: "સંસ્થા જોડાણ", labelEn: "Joined Here",     val: hm.institutionJoiningDate },
                    { icon: CalendarDays, labelGu: "નિવૃત્તિ",      labelEn: "Retirement",      val: hm.retirementDate },
                  ].map((d) => (
                    <div key={d.labelEn} className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
                      <span className="flex items-center gap-1 text-xs text-amber-700/70 font-medium mb-0.5">
                        <d.icon className="w-3 h-3" />
                        {lang === "gu" ? d.labelGu : d.labelEn}
                      </span>
                      <span className="text-sm font-bold text-amber-900">{d.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Principal History ── */}
      <section className="section-padding bg-muted/40 relative">
        <div className="section-container">
          <AnimatedSection>
            <span className="section-label">{t("અમારા સુકાનીઓ", "Our Helmsmen")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-2">
              {t("ભૂતકાળ અને વર્તમાન આચાર્ય", "Past & Present Principals")}
            </h2>
            <p className="text-muted-foreground mb-3">
              {t(
                "૧૯૬૭ ની સ્થાપનાથી આજ સુધી — સ્કૂલ ના સુકાન સ્વીકારનાર સૌ આચાર્યો",
                "Every principal who has led Sevasi High School since its founding in 1967"
              )}
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <UserCheck className="w-3.5 h-3.5" />
                {t("પૂર્ણ-સ્થાયી આચાર્ય", "Full-time Principal")}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                {t("ઇ.આ. (ઇન-ચાર્જ)", "In-charge Principal")}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                <Anchor className="w-3.5 h-3.5" />
                {t("વર્તમાન આચાર્ય", "Currently Serving")}
              </span>
            </div>

            {/* Grid of principal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRINCIPAL_HISTORY.map((p, i) => {
                const isCurrent   = p.type === "current";
                const isIncharge  = p.type === "incharge";
                const name        = lang === "gu" ? p.nameGu : p.nameEn;
                const altName     = lang === "gu" ? p.nameEn : p.nameGu;
                const tenure      = lang === "gu" ? p.tenureGu : p.tenureEn;
                const qual        = lang === "gu" ? p.qualGu : p.qualEn;

                const cardBorder  = isCurrent  ? "border-emerald-300 ring-2 ring-emerald-200"
                                  : isIncharge ? "border-orange-200"
                                  : "border-border/60";
                const stripe      = isCurrent  ? "from-emerald-400 to-teal-500"
                                  : isIncharge ? "from-orange-400 to-amber-400"
                                  : "from-primary/70 to-primary";
                const avatarBg    = isCurrent  ? "bg-gradient-to-br from-emerald-400 to-teal-600"
                                  : isIncharge ? "bg-gradient-to-br from-orange-400 to-amber-500"
                                  : "bg-gradient-to-br from-primary/80 to-primary";
                const badgeBg     = isCurrent  ? "bg-emerald-100 text-emerald-800"
                                  : isIncharge ? "bg-orange-100 text-orange-700"
                                  : "bg-primary/10 text-primary";
                const tenureBg    = isCurrent  ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                                  : isIncharge ? "bg-orange-50 border-orange-100 text-orange-700"
                                  : "bg-muted/50 border-border/40 text-foreground";

                return (
                  <AnimatedSection key={p.serial} delay={i * 0.04}>
                    <div className={`bg-card rounded-2xl border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col ${cardBorder}`}>
                      {/* Stripe */}
                      <div className={`h-1.5 bg-gradient-to-r ${stripe}`} />

                      <div className="p-4 flex flex-col gap-3 flex-1">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                          {/* Avatar */}
                          <div className={`w-10 h-10 rounded-xl ${avatarBg} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
                            {p.serial}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-heading font-semibold text-foreground text-sm leading-snug">{name}</p>
                            <p className="font-gujarati text-[10px] text-muted-foreground mt-0.5 truncate">{altName}</p>
                          </div>
                          {/* Type badge */}
                          <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeBg}`}>
                            {isCurrent  ? (lang === "gu" ? "વર્તમાન" : "Current")
                            : isIncharge ? (lang === "gu" ? "ઇ.આ."   : "In-ch.")
                            : (lang === "gu" ? "આચાર્ય" : "Principal")}
                          </span>
                        </div>

                        {/* Qualification */}
                        <div className="flex items-center gap-1.5 bg-muted/40 rounded-lg px-3 py-2 text-xs">
                          <GraduationCap className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                          <span className="font-semibold text-foreground/80">{qual}</span>
                        </div>

                        {/* Tenure */}
                        <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs mt-auto ${tenureBg}`}>
                          <Clock className="w-3.5 h-3.5 shrink-0 opacity-60" />
                          <span className="font-semibold font-mono">{tenure}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Secondary Teachers ── */}
      <section className="section-padding bg-muted/40 relative">
        <div className="section-container">
          <AnimatedSection>
            <span className="section-label">{t("શૈક્ષણિક સ્ટાફ", "Teaching Staff")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-1">
              {t("માધ્યમિક શિક્ષક-શિક્ષિકા", "Secondary Teachers")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(`${teachers.length} માધ્યમિક શિક્ષક-શિક્ષિકા`, `${teachers.length} permanent secondary teachers`)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teachers.map((member, i) => (
                <AnimatedSection key={`${member.serial}`} delay={i * 0.05}>
                  <StaffCard member={member} lang={lang} />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Teaching Assistants ── */}
      <section className="section-padding bg-background relative">
        <div className="section-container">
          <AnimatedSection>
            <span className="section-label">{t("સહાયક", "Assistants")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-1">
              {t("શિક્ષણ સહાયક", "Teaching Assistants")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(`${assistants.length} શિક્ષણ સહાયક`, `${assistants.length} teaching assistants`)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {assistants.map((member, i) => (
                <AnimatedSection key={`${member.serial}`} delay={i * 0.05}>
                  <StaffCard member={member} lang={lang} />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Non-Teaching Staff ── */}
      <section className="section-padding bg-muted/40 relative">
        <div className="section-container">
          <AnimatedSection>
            <span className="section-label">{t("બિન-શૈક્ષણિક", "Non-Teaching")}</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-1">
              {t("બિન-શૈક્ષણિક સ્ટાફ", "Non-Teaching Staff")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(`${nonTeaching.length} બિન-શૈક્ષણિક કર્મચારી`, `${nonTeaching.length} administrative & support staff`)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {nonTeaching.map((member, i) => (
                <AnimatedSection key={member.nameEn} delay={i * 0.05}>
                  <StaffCard member={member} lang={lang} />
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Staff;
