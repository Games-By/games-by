'use client';
import React from 'react';
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import { Main } from '@/Styles/styles';
import SideBar from '@/components/SideBar';
import useWindowSize from '@/hooks/useWindowSize';

const LibraryPage = () => {
   const { width } = useWindowSize();

   return (
      <>
         <title>LibraryPage | Games By</title>
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <div className='main-content'>
               <Header />
               <div>library</div>
            </div>
         </Main>
         <ToastContainer />
      </>
   );
};

export default LibraryPage;
