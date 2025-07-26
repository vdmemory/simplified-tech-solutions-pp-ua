import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="h-8 px-3 text-sm"
      >
        EN
      </Button>
      <Button
        variant={language === 'ua' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('ua')}
        className="h-8 px-3 text-sm"
      >
        UA
      </Button>
    </div>
  );
};

export default LanguageSwitcher;