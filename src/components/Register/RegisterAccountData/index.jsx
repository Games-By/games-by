import { useRef } from 'react';
import Input from '../../Input/Input';
import { AccountData, PhotoSelector } from './AccountData';
import { Title } from '@/app/[locale]/register/RegisterStyles';
import { Label } from '@/components/Input/InputStyles';

const RegisterAccountData = ({ data, onChange, error, imageChange }) => {
   const imageInputRef = useRef(null);
   return (
      <>
         <AccountData>
            <Title>Account Data</Title>
            <Input
               type='text'
               name='email'
               value={data.email}
               onChange={onChange}
               placeholder='Email'
               required={true}
               className={'input'}
               label={'E-mail'}
               error={error.email}
            />
            <Input
               type='text'
               name='confirmEmail'
               value={data.confirmEmail}
               onChange={onChange}
               placeholder='Confirm E-mail'
               required={true}
               className={'input'}
               label={'Confirm E-mail'}
               error={error.confirmEmail}
            />
            <Input
               type='password'
               name='password'
               value={data.password}
               onChange={onChange}
               placeholder='Password'
               required={true}
               className={'input'}
               label={'Password'}
               error={error.password}
            />
            <Input
               type='password'
               name='confirmPassword'
               value={data.confirmPassword}
               onChange={onChange}
               placeholder='Confirm Password'
               required={true}
               className={'input'}
               label={'Confirm Password'}
               error={error.confirmPassword}
            />
            <PhotoSelector>
               <Label>Profile Photo</Label>
               <input
                  className='file-selector'
                  type='file'
                  accept='image/*'
                  ref={imageInputRef}
                  onChange={imageChange}
               />
            </PhotoSelector>
         </AccountData>
      </>
   );
};

export default RegisterAccountData;
