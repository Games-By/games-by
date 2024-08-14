const { TitleStyle } = require('./TitleStyles');

const Title = ({ text, className }) => {
   return (
      <>
         <TitleStyle className={className}>{text}</TitleStyle>
      </>
   );
};

export default Title;
