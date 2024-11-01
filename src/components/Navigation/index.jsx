import React from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '../../../navigation';
import data from '@/data/menu.json';
import { FaStoreAlt } from 'react-icons/fa';
import { IoLibrarySharp, IoNewspaper } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { Nav } from './styles';

const { sidebarNavigation } = data;

const Navigation = () => {
   const locale = useLocale();
   const pathname = usePathname();
   const isActive = (url) => {
      return pathname === url;
   };

   return (
      <Nav>
         <ul>
            {sidebarNavigation.map((item, i) => (
               <li key={i} className={isActive(item.url) ? 'active' : ''}>
                  <Link href={item.url} className={'item'}>
                     {(item.title['en-US'] === 'Store' && <FaStoreAlt />) ||
                        (item.title['en-US'] === 'Library' && <IoLibrarySharp />) ||
                        (item.title['en-US'] === 'News' && <IoNewspaper />) ||
                        (item.title['en-US'] === 'Settings' && <IoMdSettings />)}
                     <span>{item.title[locale]}</span>
                  </Link>
               </li>
            ))}
         </ul>
      </Nav>
   );
};

export default Navigation;
