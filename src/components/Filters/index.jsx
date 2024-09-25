import React, { useEffect } from 'react';
import data from '@/data/filters';
import CustomSelect from '../CustomSelect';

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

   return (
      <div className='filters'>
         <div>
            {platformsData.map((platform, index) => (
               <label key={index}>
                  <input
                     type='checkbox'
                     value={platform}
                     checked={platforms.includes(platform)}
                     onChange={() => handlePlatformChange(platform)}
                     aria-label={`Filtro de plataforma: ${platform}`}
                  />
                  {platform}
               </label>
            ))}
         </div>

         <CustomSelect
            options={genreOptions}
            value={genre}
            onChange={(e) => {
               setActiveFilters((prevFilters) => ({
                  ...prevFilters,
                  genre: e.target.value,
               }));
            }}
            placeholder='Selecione o gênero'
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
            placeholder='Selecione a publisher'
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
            placeholder='Selecione'
         />

         <button onClick={filterGames}>Aplicar Filtros</button>
         <button onClick={handleClearFilters}>Limpar Filtros</button>
      </div>
   );
};

export default Filters;
