import { CopyrightStyles } from './style';

const Copyright = () => {
   return (
      <>
         <CopyrightStyles>
            <p className='message'>
               <span className='business'>GameBy ©</span>- {new Date().getFullYear()} All Rights
               reserved
            </p>
         </CopyrightStyles>
      </>
   );
};

export default Copyright;
