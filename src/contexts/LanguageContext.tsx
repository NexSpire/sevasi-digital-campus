import { createContext, useContext, useState, ReactNode } from "react";

type Language = "gu" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (gu: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("gu");

  const toggleLang = () => setLang((prev) => (prev === "gu" ? "en" : "gu"));
  const t = (gu: string, en: string) => (lang === "gu" ? gu : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
