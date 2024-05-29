import { useTranslations } from 'next-intl';

import LanguageSwitcher from '@/components/Languages/LanguageSwitcher';
import React from 'react';

export default function LoginPage() {
   const t = useTranslations('Index');
   return (
      <>
         <LanguageSwitcher url={'/login'} />
         <h1>{t('title')}</h1>
      </>
   );
}
