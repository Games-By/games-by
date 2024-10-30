import { useState } from 'react';

export const useToggleSidebar = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
   return { isSidebarOpen, toggleSidebar };
};
