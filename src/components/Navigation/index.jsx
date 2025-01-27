import React from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '../../../navigation';
import data from '@/data/menu.json';
import { Nav } from './styles';
import { Icon } from '../Icon';

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
               <Link key={i} href={item.url} className={'item'}>
                  <li className={isActive(item.url) ? 'active' : ''}>
                     {item.icon ? (
                        <Icon nameIcon={item.icon} propsIcon={{ size: 20, className: '' }} />
                     ): null}
                     <span>{item.title[locale]}</span>
                  </li>
               </Link>
            ))}
         </ul>
      </Nav>
   );
};

export default Navigation;
