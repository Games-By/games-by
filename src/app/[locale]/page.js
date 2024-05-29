import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/Languages/LanguageSwitcher';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/Styles/globals';

export const metadata = {
   title: "Games By | Home",
   description: "Generated by create next app",
};

export default function Index() {
   const t = useTranslations('Index');

   return (
      <div>
         <GlobalStyle />
         <Header />
         {/* <LanguageSwitcher /> */}
      </div>
   );
}
