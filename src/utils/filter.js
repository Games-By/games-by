export const filterGames = (gamesList, activeFilters, setFilteredGames, locale) => {
   let filtered = [...gamesList];
   // Filtro por gênero
   if (activeFilters.genre !== '') {
      filtered = filtered.filter((game) =>
         game.genres['en-US'].some((genre) =>
            genre.toLowerCase().includes(activeFilters.genre.toLowerCase())
         )
      );
   }

   // Filtro por plataformas
   if (activeFilters.platforms.length > 0) {
      filtered = filtered.filter((game) =>
         game.platforms.some((platform) =>
            activeFilters.platforms.some(
               (selectedPlatform) => platform.toLowerCase() === selectedPlatform.toLowerCase()
            )
         )
      );
   }

   // Filtro por publisher
   if (activeFilters.publisher !== '') {
      filtered = filtered.filter(
         (game) => game.publisher.toLowerCase() === activeFilters.publisher.toLowerCase()
      );
   }

   // Filtro por preço
   if (activeFilters.price) {
      if (
         activeFilters.price === 'Gratuito' ||
         activeFilters.price === 'Gratis' ||
         activeFilters.price === 'Free'
      ) {
         filtered = filtered.filter((game) => game.prices['pt-BR'].amount === 0);
      }

      if (activeFilters.price.includes('40')) {
         filtered = filtered.filter((game) => game.prices['pt-BR'].amount <= 40);
      }
      if (activeFilters.price.includes('80')) {
         filtered = filtered.filter((game) => game.prices['pt-BR'].amount <= 80);
      }
      if (activeFilters.price.includes('120')) {
         filtered = filtered.filter((game) => game.prices['pt-BR'].amount <= 120);
      }
      if (activeFilters.price.includes('59,99')) {
         filtered = filtered.filter((game) => game.prices['pt-BR'].amount > 60);
      }
      if (
         activeFilters.price.includes('desconto') ||
         activeFilters.price.includes('escuento') ||
         activeFilters.price.includes('discount')
      ) {
         filtered = filtered.filter((game) => game.discount > 0);
      }
   }

   setFilteredGames(filtered);
};
