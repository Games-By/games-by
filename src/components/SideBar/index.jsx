import useWindowSize from '@/hooks/useWindowSize';
import { SideBarStyles } from './styles';

const SideBar = ({ isOpen, setIsOpen }) => {
   const { width } = useWindowSize();
   return (
      <>
         <SideBarStyles isOpen={isOpen}>teste</SideBarStyles>
      </>
   );
};

export default SideBar;
