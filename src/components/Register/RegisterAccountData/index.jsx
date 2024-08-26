import { useRef } from 'react';
import Input from '../../Input/Input';
import { AccountData, PhotoSelector, Title } from './AccountData';
import { Label } from '@/components/Input/InputStyles';
import { IoMdPhotos } from 'react-icons/io';
import { useTranslations } from 'next-intl';

const RegisterAccountData = ({ data, onChange, error, imageChange }) => {
   const imageInputRef = useRef(null);
   const t = useTranslations('RegisterPage');

   return (
      <>
         <AccountData>
            <Title>{t('accountData.title')}</Title>
            <div style={{ width: '100%' }}>
               <Input
                  type='text'
                  name='username'
                  value={data.username}
                  onChange={onChange}
                  placeholder={t('accountData.inputUsernamePlaceholder')}
                  required={true}
                  className={'input'}
                  label={t('accountData.inputUsernameLabel')}
                  error={error.username}
               />
            </div>
            <Input
               type='text'
               name='email'
               value={data.email}
               onChange={onChange}
               placeholder='email@exemple.com'
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
               placeholder={'email@exemple.com'}
               required={true}
               className={'input'}
               label={t('accountData.inputConfirmEmailLabel')}
               error={error.confirmEmail}
            />
            <Input
               type='password'
               name='password'
               value={data.password}
               onChange={onChange}
               placeholder={t('accountData.inputPasswordPlaceholder')}
               required={true}
               className={'input'}
               label={t('accountData.inputPasswordLabel')}
               error={error.password}
            />
            <Input
               type='password'
               name='confirmPassword'
               value={data.confirmPassword}
               onChange={onChange}
               placeholder={t('accountData.inputConfirmPasswordPlaceholder')}
               required={true}
               className={'input'}
               label={t('accountData.inputConfirmPasswordLabel')}
               error={error.confirmPassword}
            />
            <PhotoSelector>
               <Label>{t('accountData.profilePhoto')}</Label>
               <input
                  className='file-selector'
                  type='file'
                  accept='image/*'
                  ref={imageInputRef}
                  onChange={imageChange}
               />
               <IoMdPhotos className='icon' />
            </PhotoSelector>
         </AccountData>
      </>
   );
};

export default RegisterAccountData;
