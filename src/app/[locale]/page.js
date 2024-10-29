'use client';
import Header from '@/components/Header';
import Banners from '@/components/Banner';
import Releases from '@/components/Releases';
import { ToastContainer } from 'react-toastify';
import Discover from '@/modules/Discover';
import HorizontalImages from '@/modules/HorizontalImages';
import Offers from '@/modules/Offers';
import Columns from '@/modules/Columns';
import Footer from '@/modules/Footer';
import SideBar from '@/components/SideBar';
import { Main } from '@/Styles/styles';
import useWindowSize from '@/hooks/useWindowSize';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
   const { isLoggedIn } = useAuth();
   const { width } = useWindowSize();

   return (
      <>
         <title>Home | Games By</title>
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <div className='main-content'>
               <Header />
               <Banners isLoggedIn={isLoggedIn} />
               <Releases />
               <Discover />
               <HorizontalImages />
               <Offers />
               <Columns />
            </div>
         </Main>
         <Footer />
         <ToastContainer />
      </>
   );
};

export default Index;
