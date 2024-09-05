import Button from '../Button/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ArrowsContainer } from './styles';

const Arrows = ({ backHandle, nextHandle, className }) => {
   return (
      <ArrowsContainer className={className}>
         <Button
            className={'arrow'}
            icon={<IoIosArrowBack />}
            onClick={backHandle}
         />
         <Button
            className={'arrow'}
            icon={<IoIosArrowForward />}
            onClick={nextHandle}
         />
      </ArrowsContainer>
   );
};

export default Arrows;
