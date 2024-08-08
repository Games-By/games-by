import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
   100% {
      transform: translateX(100%);
   }
`;

const SkeletonContainer = styled.div`
   width: ${(props) => props.width ? props.width : "90%" };
   height: ${(props) => props.height ? props.height + 'rem' : '2rem' };
   background-color: ${(props) => props.theme === 'dark' ? props.theme + 'rgba(255,255,255, 0.5)' : 'rgba(0,0,0, 0.5)' };
   border-radius: 8px;
   position: relative;
   overflow: hidden;

   &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
         90deg,
         rgba(255, 255, 255, 0) 0%,
         rgba(255, 255, 255, 0.2) 20%,
         rgba(255, 255, 255, 0.5) 60%,
         rgba(255, 255, 255, 0)
      );
      animation: ${shimmerAnimation} 2s infinite;
      content: '';
   }
`;

const SkeletonEffect = ({ width, height, theme }) => {
   return <SkeletonContainer width={width} height={height} theme={theme}/>;
};

export default SkeletonEffect;
