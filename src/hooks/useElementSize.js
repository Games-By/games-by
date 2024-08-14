import { useState, useEffect, useRef } from 'react';

const useElementSize = () => {
   const elementRef = useRef(null);
   const [size, setSize] = useState({ ElementWidth: 0, ElementHeight: 0 });

   useEffect(() => {
      const handleResize = () => {
         if (elementRef.current) {
            setSize({
               ElementWidth: elementRef.current.offsetWidth,
               ElementHeight: elementRef.current.offsetHeight,
            });
         }
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return [size, elementRef];
};

export default useElementSize;
