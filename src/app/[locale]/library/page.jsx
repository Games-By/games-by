'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { ToastContainer } from 'react-toastify';
import { Main } from '@/Styles/styles';
import SideBar from '@/components/SideBar';
import useWindowSize from '@/hooks/useWindowSize';
import { useSearchParams } from 'next/navigation';
import { Container } from './styles';
import { debounce } from '@/utils/debounce';
import { getGames } from '@/Services/games-service/getGames';
import { useLocale } from 'next-intl';
import Filters from '@/components/Filters';
import GameList from '@/components/GameList';
import { filterGames } from '@/utils/filter';
import Footer from '@/modules/Footer';

const LibraryPage = () => {
   const { width } = useWindowSize();
   const searchParams = useSearchParams();
   const searched = searchParams.get('searched') || '';
   const locale = useLocale();

   const [gamesList, setGamesList] = useState([]);
   const [filteredGames, setFilteredGames] = useState([]);
   const [loading, setLoading] = useState(true);
   const [activeFilters, setActiveFilters] = useState({
      keywords: [],
      genre: '',
      platforms: [],
      price: null,
      rating: '',
      publisher: '',
   });

   const getAllGames = async () => {
      setLoading(true);

      try {
         const response = await getGames();
         setGamesList(response);
         setFilteredGames(response);
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   };

   const debouncedGetAllGames = debounce(getAllGames, 1000);

   useEffect(() => {
      debouncedGetAllGames();
   }, []);

   useEffect(() => {
      if (searched) {
         const searchedGame = gamesList.filter((game) =>
            game.name.toLowerCase().includes(searched.toLowerCase())
         );
         setFilteredGames(searchedGame);
      } else {
         setFilteredGames(gamesList);
      }
   }, [searched, gamesList]);

   const handleClearFilters = () => {
      setActiveFilters({
         keywords: [],
         genre: '',
         platforms: [],
         price: null,
         rating: '',
         publisher: '',
      });
      setFilteredGames(gamesList);
   };

   return (
      <>
         {searched ? <title>🔎 Searching games</title> : <title>Library | Games By</title>}
         <Main>
            {width > 1024 && <SideBar isOpen={true} />}
            <Header />
            <Container>
               <div className='games-box'>
                  <GameList filteredGames={filteredGames} locale={locale} loading={loading} />
                  <div className='filter-box'>
                     <Filters
                        activeFilters={activeFilters}
                        setActiveFilters={setActiveFilters}
                        filterGames={() =>
                           filterGames(gamesList, activeFilters, setFilteredGames, locale)
                        }
                        handleClearFilters={handleClearFilters}
                        locale={locale}
                        games={filteredGames}
                     />
                  </div>
               </div>
            </Container>
         </Main>
         <Footer />
         <ToastContainer />
      </>
   );
};

export default LibraryPage;
