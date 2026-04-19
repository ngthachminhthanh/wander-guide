"use client";

import React, { createContext, useContext } from "react";
import { Dictionary, Locale, getDictionary, defaultLocale } from "@/i18n";

interface I18nContextProps {
  locale: Locale;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextProps>({
  locale: defaultLocale,
  t: getDictionary(defaultLocale),
});

export const useI18n = () => useContext(I18nContext);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = getDictionary(locale);

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
