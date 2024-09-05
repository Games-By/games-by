const { TitleStyle } = require('./TitleStyles');

const Title = ({ icon, text, className }) => {
   return (
      <>
         <TitleStyle className={className}>
            {icon && icon}
            <h2 className='text'>{text}</h2>
         </TitleStyle>
      </>
   );
};

export default Title;
