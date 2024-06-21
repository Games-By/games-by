import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Loading = ({ loading, size }) => (
   <LoadingStyle>
      <PacmanLoader
         color={'#fffb00'}
         loading={loading}
         size={size ? size : 11.5}
      />
   </LoadingStyle>
);

const LoadingStyle = styled.div`
   margin: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export default Loading;
