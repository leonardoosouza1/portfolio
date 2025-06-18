"use client";

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation'; // Corrected import for App Router
import { usePathname } from 'next/navigation'; // Corrected import for App Router

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = i18n.language;

  const changeLanguage = (locale: string) => {
    // For App Router, we need to manually change the path
    // Remove current locale from pathname if it exists
    const newPathname = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${locale}`)
      : `/${locale}${pathname}`;

    // next-i18next's i18n.changeLanguage might not be enough for App Router to refresh correctly
    // It's often better to use router.push with the new locale in the path
    router.push(newPathname);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en-US')}
        disabled={currentLocale === 'en-US'}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors
                    ${currentLocale === 'en-US' ? 'bg-primary text-primary-foreground cursor-not-allowed' : 'hover:bg-accent hover:text-accent-foreground'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('pt-BR')}
        disabled={currentLocale === 'pt-BR'}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors
                    ${currentLocale === 'pt-BR' ? 'bg-primary text-primary-foreground cursor-not-allowed' : 'hover:bg-accent hover:text-accent-foreground'}`}
      >
        PT
      </button>
    </div>
  );
}
