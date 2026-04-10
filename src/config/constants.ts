export const SCHOOL_INFO = {
  name: "Sevasi High School",
  nameGujarati: "સેવાસી હાઈ સ્કૂલ",
  location: "Sewasi, Vadodara, Gujarat",
  locationGujarati: "સેવાસી, વડોદરા, ગુજરાત",
  medium: "Gujarati Medium",
  mediumGujarati: "ગુજરાતી માધ્યમ",
  board: "State Board (GSEB)",
  boardGujarati: "રાજ્ય બોર્ડ (GSEB)",
  grades: "Primary, Secondary, Higher Secondary",
  gradesGujarati: "પ્રાથમિક, માધ્યમિક, ઉચ્ચતર માધ્યમિક",
  established: "1967",
  rating: "3.9",
  reviewCount: "22",
  email: "principalshs02@gmail.com",
  website: "http://www.sevasihighschool.com",
  address: "પો.મુ. સેવાસી, તા. જી. વડોદરા - 391101",
  addressEn: "Post Sevasi, Taluka & District Vadodara - 391101",
  paymentModes: "Cheque / Demand Draft, Cash",
  paymentModesGujarati: "ચેક / ડિમાન્ડ ડ્રાફ્ટ, રોકડ",
  officeHours: {
    weekdays: "Primary: 7:30 AM to 11:30 AM | Secondary: 11:45 AM to 5:30 PM",
    weekdaysGujarati: "પ્રાથમિક: સવાર 7:30 થી 11:30 | માધ્યમિક: 11:45 થી 5:30",
    saturday: "Primary: 11:30 AM to 2:30 PM | Secondary: 7:30 AM to 11:15 AM",
    saturdayGujarati: "પ્રાથમિક: 11:30 થી 2:30 | માધ્યમિક: 7:30 થી 11:15",
    sunday: "Closed",
    sundayGujarati: "બંધ",
  },
} as const;

export const NAV_ITEMS = [
  { label: "હોમ", labelEn: "Home", href: "/" },
  { label: "અમારા વિશે", labelEn: "About Us", href: "/about" },
  { label: "શૈક્ષણિક", labelEn: "Academics", href: "/academics" },
  { label: "પ્રવેશ", labelEn: "Admissions", href: "/admissions" },
  { label: "વિદ્યાર્થી જીવન", labelEn: "Student Life", href: "/student-life" },
  { label: "સ્ટાફ", labelEn: "Staff & Trustees", href: "/staff" },
  { label: "સંપર્ક", labelEn: "Contact", href: "/contact" },
] as const;

export const SCHOOL_INFO_PARTIAL_DATA = {
  school: {
    name: {
      gu: "સેવાસી હાઈસ્કૂલ, સેવાસી",
      en: "Sevasi High School, Sevasi",
    },
    tagline: {
      gu: "ગુણવત્તાયુક્ત શિક્ષણ તરફનું એક મજબૂત પગલું",
      en: "A Strong Step Towards Quality Education",
    },
    description: {
      gu: "સેવાસી હાઈસ્કૂલ એક પ્રતિષ્ઠિત શૈક્ષણિક સંસ્થા છે, જે વર્ષ 1967થી ગુણવત્તાયુક્ત શિક્ષણ પૂરું પાડે છે. શાળા વિદ્યાર્થીઓના સર્વાંગી વિકાસ માટે પ્રતિબદ્ધ છે અને શૈક્ષણિક તેમજ સહ-પાઠ્ય પ્રવૃત્તિઓમાં સક્રિય ભાગ લે છે.",
      en: "Sevasi High School is a reputed educational institution established in 1967. The school is committed to delivering quality education and focuses on the holistic development of students through academic and co-curricular activities.",
    },
  },

  basic_info: {
    address: {
      gu: "પો.મુ. સેવાસી, તા. જી. વડોદરા - 391101",
      en: "Post Sevasi, Taluka & District Vadodara - 391101",
    },
    contact: {
      email: "principalshs02@gmail.com",
      website: "http://www.sevasihighschool.com",
    },
    established_year: 1967,
    registration_number: "S.S.N. 3467/46331 G (27/06/1967)",
    medium: {
      gu: "ગુજરાતી માધ્યમ",
      en: "Gujarati Medium",
    },
    school_type: {
      gu: "મિશ્ર શાળા (પ્રાથમિક, માધ્યમિક અને ઉચ્ચ માધ્યમિક)",
      en: "Co-educational School (Primary, Secondary & Higher Secondary)",
    },
    dise_code: "184",
    indexes: {
      ssc: "65.071",
      hsc: "15.518",
    },
  },

  principal: {
    name: {
      gu: "શ્રી જયેશકુમાર આર. પટેલ",
      en: "Shri Jayeshkumar R. Patel",
    },
    designation: {
      gu: "આચાર્ય",
      en: "Principal",
    },
    contact: {
      mobile_primary: "9998447545",
      mobile_secondary: "9427848430",
    },
    address: {
      gu: "વી/3 શ્રીરામનગર સોસાયટી, વડોદરા",
      en: "V/3 Shriram Nagar Society, Vadodara",
    },
  },

  academics: {
    classes: {
      pre_primary: 2,
      primary: 8,
      secondary: 6,
      higher_secondary: 2,
    },
    teaching_medium: {
      gu: "ગુજરાતી",
      en: "Gujarati",
    },
    focus: {
      gu: "વિદ્યાર્થીઓના બૌદ્ધિક, શારીરિક અને નૈતિક વિકાસ પર ધ્યાન કેન્દ્રિત",
      en: "Focus on intellectual, physical and moral development of students",
    },
  },

  timings: {
    primary_section: {
      monday_to_friday: {
        gu: "સવાર 7:30 થી 11:30",
        en: "7:30 AM to 11:30 AM",
      },
      saturday: {
        gu: "11:30 થી 2:30",
        en: "11:30 AM to 2:30 PM",
      },
    },
    secondary_section: {
      monday_to_friday: {
        gu: "11:45 થી 5:30",
        en: "11:45 AM to 5:30 PM",
      },
      saturday: {
        gu: "7:30 થી 11:15",
        en: "7:30 AM to 11:15 AM",
      },
    },
    weekly_hours: {
      teaching: {
        gu: "28 કલાક 50 મિનિટ",
        en: "28 hours 50 minutes",
      },
      break: {
        gu: "3 કલાક 40 મિનિટ",
        en: "3 hours 40 minutes",
      },
    },
  },

  vision: {
    gu: [
      "શ્રેષ્ઠ ગુણવત્તાવાળું શિક્ષણ આપવું",
      "અભ્યાસ પ્રત્યે વિદ્યાર્થીઓમાં રસ વિકસાવવો",
      "આદર્શ શાળા બનવા સતત પ્રયત્ન કરવો",
      "અભ્યાસ સાથે સહ-પાઠ્ય પ્રવૃત્તિઓનો વિકાસ કરવો",
      "સમયાનુસાર કમ્પ્યુટર શિક્ષણ પ્રદાન કરવું",
      "વિદ્યાર્થીઓને પ્રામાણિક અને મહેનતુ બનાવવું",
      "દર વર્ષે ઉત્તમ પરિણામ મેળવવું",
      "દરેક બાળક સુધી શિક્ષણ પહોંચાડવું",
    ],
    en: [
      "To provide high-quality education",
      "To develop interest in learning among students",
      "To become an ideal educational institution",
      "To promote co-curricular activities along with academics",
      "To provide computer education as per modern needs",
      "To nurture honest and hardworking students",
      "To achieve excellent academic results every year",
      "To ensure education reaches every child",
    ],
  },

  mission: {
    gu: [
      "જીવનમૂલ્યો અને કૌશલ્યનો વિકાસ કરવો",
      "ઉચ્ચ પરિણામ અને સફળતા મેળવવા સતત પ્રયત્ન",
      "શાળાને દરેક પ્રવૃત્તિમાં અગ્રેસર બનાવવી",
      "સર્વ માટે શિક્ષણ ઉપલબ્ધ કરવું",
      "100% સાક્ષરતા હાંસલ કરવી",
      "દરેક વિદ્યાર્થીને શ્રેષ્ઠ વ્યક્તિ બનાવવો",
    ],
    en: [
      "To continuously strive for excellent results and success",
      "To keep the school at the forefront in all activities",
      "To make education accessible to all",
      "To achieve 100% literacy",
      "To develop every student into a responsible individual",
      "To instill values and life skills in students",
    ],
  },

  facilities: {
    gu: [
      "પ્રયોગશાળા",
      "લાઇબ્રેરી",
      "કમ્પ્યુટર લેબ",
      "રમતગમત સુવિધાઓ",
      "પાણી અને સ્વચ્છતા સુવિધા",
      "વિજળી સુવિધા",
      "ડિજિટલ શિક્ષણ વ્યવસ્થા",
    ],
    en: [
      "Science Laboratory",
      "Library",
      "Computer Lab",
      "Sports Facilities",
      "Clean Drinking Water & Sanitation",
      "Electricity Facilities",
      "Digital Learning Infrastructure",
    ],
  },

  activities_and_celebrations: {
    gu: [
      "સ્વતંત્રતા દિવસ",
      "પ્રજાસત્તાક દિવસ",
      "શિક્ષક દિવસ",
      "બાળ દિવસ",
      "ગુજરાત સ્થાપના દિવસ",
      "રાષ્ટ્રીય યુવા દિવસ",
      "હિન્દી દિવસ",
      "પર્યાવરણ દિવસ",
      "નવરાત્રી મહોત્સવ",
      "રક્ષાબંધન",
      "ગુરૂપૂર્ણિમા",
    ],
    en: [
      "Independence Day",
      "Republic Day",
      "Teacher's Day",
      "Children's Day",
      "Gujarat Foundation Day",
      "National Youth Day",
      "Hindi Day",
      "Environment Day",
      "Navratri Festival",
      "Raksha Bandhan",
      "Guru Purnima",
    ],
  },

  staff: [
    {
      name: {
        gu: "શ્રી જયેશકુમાર આર. પટેલ",
        en: "Shri Jayeshkumar R. Patel",
      },
      role: {
        gu: "આચાર્ય",
        en: "Principal",
      },
      mobile: "9662543201",
    },
    {
      name: {
        gu: "શ્રી રાજુભાઈ પટેલ",
        en: "Mr. Rajubhai Patel",
      },
      role: {
        gu: "મદદનીશ",
        en: "Assistant Teacher",
      },
      mobile: "9979880770",
    },
    {
      name: {
        gu: "શ્રી વિપુલભાઈ પટેલ",
        en: "Mr. Vipulbhai Patel",
      },
      role: {
        gu: "મદદનીશ",
        en: "Assistant Teacher",
      },
      mobile: "9998881108",
    },
  ],
} as const;

export const SCHOOL_ACADEMICS_DATA = SCHOOL_INFO_PARTIAL_DATA.academics;
// Alias kept for compatibility with typo usage like "acedemics".
export const SCHOOL_ACEDEMICS_DATA = SCHOOL_INFO_PARTIAL_DATA.academics;
