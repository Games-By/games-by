// components/ButtonLink.js
'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function ButtonLink({ url}) {
  const locales = [
    {name: 'Play', code: 'pl'},
    {name: 'Add to wishlist', code: 'aw'},
    {name: 'Buy now', code: 'bn'},
    {name: '% more deals', code: 'md'},
    {name: 'view more', code: 'vm'},    
  ];


  const pathname = usePathname();

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '12px',
    color: '#A55BFE',
    backgroundColor: '#383838',
    border: '2px solid #A55BFE',
    borderRadius: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'center',
    
    
  };

  

  return (
   <>
       
      <Link href={url} locale={pathname} passHref>
       
      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.currentTarget.style.color = buttonHoverStyle.color;
          e.currentTarget.style.borderColor = buttonHoverStyle.borderColor;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
          e.currentTarget.style.color = buttonStyle.color;
          e.currentTarget.style.borderColor = buttonStyle.borderColor;
        }}
      >
        ADD TO WISHLIST
      </button>
    </Link>   
  </>
 );
};

