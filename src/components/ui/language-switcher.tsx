"use client";

import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/providers/i18n-provider";

export function LanguageSwitcher() {
  const { locale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <div className="flex bg-black/10 dark:bg-white/10 rounded-full p-1 border border-black/5 dark:border-white/5 backdrop-blur-md">
      <button 
        onClick={() => switchLocale('vi')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${locale === 'vi' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-black/10 dark:hover:bg-white/10 text-foreground'}`}
      >
        VI
      </button>
      <button 
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${locale === 'en' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-black/10 dark:hover:bg-white/10 text-foreground'}`}
      >
        EN
      </button>
      <button 
        onClick={() => switchLocale('ja')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${locale === 'ja' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-black/10 dark:hover:bg-white/10 text-foreground'}`}
      >
        JA
      </button>
    </div>
  );
}
