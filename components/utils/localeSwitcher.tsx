'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = [
    { code: 'en', name: 'English 🇺🇸' },
    { code: 'es', name: 'Español 🇪🇸' },
    { code: 'fr', name: 'Français 🇫🇷' },
    { code: 'de', name: 'Deutsch 🇩🇪' },
    { code: 'it', name: 'Italiano 🇮🇹' },
    { code: 'pt', name: 'Português 🇧🇷' },
    { code: 'ja', name: '日本語 🇯🇵' },
    { code: 'zh', name: '中文 🇨🇳' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPathname);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="bg-green-700 px-6 py-1 hover:bg-white rounded-xl uppercase font-bold"
      >
        {locale.toUpperCase()} 🌐
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-40 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
