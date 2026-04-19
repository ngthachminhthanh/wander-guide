import vi from "./dictionaries/vi.json";
import en from "./dictionaries/en.json";
import ja from "./dictionaries/ja.json";

export type Locale = "vi" | "en" | "ja";

export const defaultLocale: Locale = "vi";
export const locales: Locale[] = ["vi", "en", "ja"];

const dictionaries = {
  vi,
  en,
  ja,
} as const;

export type Dictionary = typeof vi;

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
};
