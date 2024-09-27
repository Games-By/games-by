import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '@/data/filters';
import CustomSelect from '../CustomSelect';
import { FiltersBox, AppliedFiltersBox, FilterTag } from './styles';
import PlatformsDropdown from '../PlatformsDropdown';
import Button from '../Button/Button';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useWindowSize from '@/hooks/useWindowSize';
import { LuFilter, LuFilterX } from 'react-icons/lu';

const { genresData, platformsData, publishersData, pricesData } = data;

const Filters = ({
   activeFilters,
   setActiveFilters,
   locale,
   games,
   filterGames,
   handleClearFilters,
}) => {
   const { platforms, genre, publisher, price } = activeFilters;
   const { width } = useWindowSize();
   const [showFilters, setShowFilters] = useState(width > 1024);

   const getHighestPrice = () => {
      if (games.length === 0) return 0;

      return games.reduce((maxPrice, game) => {
         const gamePrice = game.prices?.[locale]?.amount || 0;
         return Math.max(maxPrice, gamePrice);
      }, 0);
   };

   useEffect(() => {
      getHighestPrice();
   }, [games, locale]);

   useEffect(() => {
      if (width > 1024) {
         setShowFilters(true);
      } else {
         setShowFilters(false);
      }
   }, [width]);

   const handlePlatformChange = (selectedPlatform) => {
      setActiveFilters((prevFilters) => {
         const isSelected = prevFilters.platforms.includes(selectedPlatform);
         return {
            ...prevFilters,
            platforms: isSelected
               ? prevFilters.platforms.filter((p) => p !== selectedPlatform)
               : [...prevFilters.platforms, selectedPlatform],
         };
      });
   };

   const handleRemoveFilter = (filterType, value) => {
      setActiveFilters((prevFilters) => {
         switch (filterType) {
            case 'platform':
               return {
                  ...prevFilters,
                  platforms: prevFilters.platforms.filter((p) => p !== value),
               };
            case 'genre':
               return { ...prevFilters, genre: '' };
            case 'publisher':
               return { ...prevFilters, publisher: '' };
            case 'price':
               return { ...prevFilters, price: '' };
            default:
               return prevFilters;
         }
      });
   };

   const genreOptions = genresData[locale].map((genre, index) => ({
      label: genre,
      value: genresData['en-US'][index],
   }));

   const publisherOptions = publishersData.map((publisher) => ({
      label: publisher,
      value: publisher,
   }));

   const priceOptions = pricesData[locale].map((price) => ({
      label: price,
      value: price,
   }));

   const hasFiltersApplied =
      platforms.length > 0 || genre || publisher || price;

   return (
      <>
         <FiltersBox>
            {width <= 1024 && (
               <motion.div
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 70 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
               >
                  <Button
                     title={showFilters ? <LuFilterX /> : <LuFilter />}
                     onClick={() => setShowFilters(!showFilters)}
                     className={'toggle-filters'}
                  />
               </motion.div>
            )}

            <AnimatePresence>
               {showFilters && (
                  <motion.div
                     className='container'
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                  >
                     <h2 className='title'>Filtros</h2>
                     <div className='filters'>
                        <PlatformsDropdown
                           handlePlatformChange={handlePlatformChange}
                           platformsData={platformsData}
                           platforms={activeFilters.platforms}
                        />

                        <CustomSelect
                           options={genreOptions}
                           value={genre}
                           onChange={(e) => {
                              setActiveFilters((prevFilters) => ({
                                 ...prevFilters,
                                 genre: e.target.value,
                              }));
                           }}
                           placeholder='Categorias'
                        />

                        <CustomSelect
                           options={publisherOptions}
                           value={publisher}
                           onChange={(e) => {
                              setActiveFilters((prevFilters) => ({
                                 ...prevFilters,
                                 publisher: e.target.value,
                              }));
                           }}
                           placeholder='Distribuidor'
                        />

                        <CustomSelect
                           options={priceOptions}
                           value={price}
                           onChange={(e) => {
                              setActiveFilters((prevFilters) => ({
                                 ...prevFilters,
                                 price: e.target.value,
                              }));
                           }}
                           placeholder='Preço'
                        />
                     </div>

                     <Button
                        title={'Aplicar filtros'}
                        onClick={() => {
                           filterGames();
                           if (width <= 1024) {
                              setShowFilters(false);
                           }
                        }}
                        className={'apply'}
                     />
                  </motion.div>
               )}
            </AnimatePresence>

            <AnimatePresence>
               {hasFiltersApplied && (
                  <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.3, delay: 0.2 }}
                  >
                     <h2 className='applyed-filters-title'>
                        Filtros aplicados
                     </h2>

                     <AppliedFiltersBox>
                        {platforms.length > 0 &&
                           platforms.map((platform) => (
                              <FilterTag key={platform}>
                                 {platform}
                                 <span
                                    onClick={() =>
                                       handleRemoveFilter('platform', platform)
                                    }
                                 >
                                    ×
                                 </span>
                              </FilterTag>
                           ))}

                        {genre && (
                           <FilterTag>
                              {genre}
                              <span onClick={() => handleRemoveFilter('genre')}>
                                 ×
                              </span>
                           </FilterTag>
                        )}

                        {publisher && (
                           <FilterTag>
                              {publisher}
                              <span
                                 onClick={() => handleRemoveFilter('publisher')}
                              >
                                 ×
                              </span>
                           </FilterTag>
                        )}

                        {price && (
                           <FilterTag>
                              {price}
                              <span onClick={() => handleRemoveFilter('price')}>
                                 ×
                              </span>
                           </FilterTag>
                        )}
                     </AppliedFiltersBox>

                     <Button
                        title={'Limpar filtros'}
                        onClick={handleClearFilters}
                        className={'clear'}
                        icon={<IoIosCloseCircleOutline />}
                     />
                  </motion.div>
               )}
            </AnimatePresence>
         </FiltersBox>
      </>
   );
};

export default Filters;
