import loadable from '@loadable/component';
import React from 'react';

export function Icon({ nameIcon, propsIcon }) {
   const lib = nameIcon
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .split(' ')[0]
      .toLowerCase();

   const ElementIcon = loadable(() =>
      import(`react-icons/${lib}/index.js`).then((mod) => ({
         default: mod[nameIcon] || (() => <span>*</span>),
      }))
   );

   return <ElementIcon {...propsIcon} />;
}

