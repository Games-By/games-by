import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/Languages/LanguageSwitcher';

export default function Index() {
   const t = useTranslations('Index');

   return (
      <div>
         <LanguageSwitcher />
         <h1>{t('title')}</h1>
      </div>
   );
}
