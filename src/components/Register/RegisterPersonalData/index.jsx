import { useLocale, useTranslations } from 'next-intl';
import Input from '../../Input/Input';
import { Gender, PersonalData, Title } from './PersonalData';
import { Error, Label } from '@/components/Input/InputStyles';
import CustomSelect from '@/components/CustomSelect';

const RegisterPersonalData = ({ data, onChange, error }) => {
   const locale = useLocale();
   const t = useTranslations('RegisterPage');

   return (
      <>
         <PersonalData>
            <Title>{t('personalData.title')}</Title>
            <Input
               type='text'
               name='name'
               value={data.name}
               onChange={onChange}
               placeholder={t('personalData.inputNamePlaceholder')}
               required={true}
               className={'input'}
               label={t('personalData.inputNameLabel')}
               error={error.name}
            />
            <Input
               type='text'
               name='birth'
               value={data.birth}
               onChange={onChange}
               placeholder={locale === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/AAAA'}
               className={'input'}
               required={true}
               label={t('personalData.inputBirthLabel')}
               error={error.birth}
            />
            {locale === 'pt-BR' && (
               <Input
                  type='text'
                  name='userID'
                  value={data.userID}
                  onChange={onChange}
                  placeholder='Digite seu CPF'
                  required={true}
                  className={'input'}
                  label={'CPF'}
                  error={error.userID}
               />
            )}
            <Gender>
               <Label style={{ color: error.gender && 'rgba(var(--red))' }}>
                  {t('personalData.inputGenderLabel')} *
               </Label>
               <CustomSelect
                  name='gender'
                  value={data.gender}
                  onChange={onChange}
                  placeholder={t('personalData.inputGenderOptions.selectGender')}
                  options={[
                     {
                        value: '',
                        label: t('personalData.inputGenderOptions.selectGender'),
                     },
                     {
                        value: 'male',
                        label: t('personalData.inputGenderOptions.male'),
                     },
                     {
                        value: 'female',
                        label: t('personalData.inputGenderOptions.female'),
                     },
                     {
                        value: 'other',
                        label: t('personalData.inputGenderOptions.other'),
                     },
                  ]}
                  error={error.gender}
               />
               {error.gender && <Error style={{ marginTop: '1.5rem' }}>{error.gender}</Error>}
            </Gender>
         </PersonalData>
      </>
   );
};

export default RegisterPersonalData;
