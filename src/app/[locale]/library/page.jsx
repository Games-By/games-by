'use client';
import React from 'react';
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import { Main } from '@/Styles/styles';
import SideBar from '@/components/SideBar';
import useWindowSize from '@/hooks/useWindowSize';
import { useSearchParams } from 'next/navigation';
import { Container } from './styles';

const LibraryPage = () => {
   const { width } = useWindowSize();
   const searchParams = useSearchParams();
   const searched = searchParams.get('searched') || '';

   return (
      <>
         {searched !== '' ? (
            <title>🔎Searching games</title>
         ) : (
            <title>Library | Games By</title>
         )}
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <Header />
            <Container>
               <p>Search term: {searched || 'nothing'}</p>
            </Container>
         </Main>
         <ToastContainer />
      </>
   );
};

export default LibraryPage;
