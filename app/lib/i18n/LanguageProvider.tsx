"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
  type TranslationTree,
} from "./translations";

const STORAGE_KEY = "language";

type LanguageContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  toggleLanguage: () => void;
  t: TranslationTree;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    // Backward compatibility: some clients may store "ne" for Nepali.
    if (storedLanguage === "ne") return "np";
    if (storedLanguage === "en" || storedLanguage === "np") {
      return storedLanguage;
    }

    return "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "np" ? "ne" : "en";
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Locale) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "np" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language, setLanguage, toggleLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
