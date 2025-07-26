import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'en', name: 'Eng', flag: '🇺🇸' },
    { code: 'ua', name: 'Укр', flag: '🇺🇦' },
];

const LanguageSwitcher = () => {
  const { language } = useLanguage();

    const currentLanguage = languages.find(lang => lang.code === language);

    const handleChangeLanguage = (newLangCode: 'en' | 'ua') => {
        localStorage.setItem('language', newLangCode);
        return window.location.reload();
    };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
        {languages.map((language) => (
        <Button
            key={language.code}
            variant={language.code === currentLanguage?.code ? 'default' : 'ghost'}
            size="sm"
            onClick={() => handleChangeLanguage(language.code as 'en' | 'ua')}
            className="h-8 px-3 text-sm">
            {language.flag} {language.name}
        </Button>
        ))}
    </div>
  );
};

export default LanguageSwitcher;