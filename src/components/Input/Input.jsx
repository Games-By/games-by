import { Error, InputContainer, InputStyles, Label } from './InputStyles';

const Input = ({
   type,
   placeholder,
   value,
   name,
   onChange,
   onClick,
   label,
   error,
   required,
   className
}) => {
   return (
      <>
         <InputContainer className={className}>
            {label && (
               <Label className={error && 'error'} htmlFor={name}>
                  {label} {required && '*'}
               </Label>
            )}
            <InputStyles
               type={type}
               placeholder={placeholder}
               value={value}
               name={name}
               onChange={onChange}
               onClick={onClick}
               className={error && 'input-error'}
            />
            {error && <Error>{error}</Error>}
         </InputContainer>
      </>
   );
};
export default Input;
