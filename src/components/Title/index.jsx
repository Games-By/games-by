const { TitleStyle } = require('./TitleStyles');

const Title = ({text}) => {
   return (
      <>
         <TitleStyle>{text}</TitleStyle>
      </>
   );
};

export default Title;
