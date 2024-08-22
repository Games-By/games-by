import { useLocale } from 'next-intl';
import Input from '../../Input/Input';
import { Gender, PersonalData, Title } from './PersonalData';
import { Error, Label } from '@/components/Input/InputStyles';
import CustomSelect from '@/components/CustomSelect';

const RegisterPersonalData = ({ data, onChange, error }) => {
   const locale = useLocale();
   return (
      <>
         <PersonalData>
            <Title>Personal Data</Title>
            <Input
               type='text'
               name='name'
               value={data.name}
               onChange={onChange}
               placeholder='Type your name'
               required={true}
               className={'input'}
               label={'Name'}
               error={error.name}
            />
            <Input
               type='text'
               name='birth'
               value={data.birth}
               onChange={onChange}
               placeholder='Birth'
               className={'input'}
               required={true}
               label={'Birth'}
               error={error.birth}
            />
            {locale === 'pt-BR' && (
               <Input
                  type='text'
                  name='userID'
                  value={data.userID}
                  onChange={onChange}
                  placeholder='type your cpf'
                  required={true}
                  className={'input'}
                  label={'CPF'}
                  error={error.userID}
               />
            )}
            <Gender>
               <Label style={{ color: error.gender && 'rgba(var(--red))' }}>
                  Gender *
               </Label>
               <CustomSelect
                  name='gender'
                  value={data.gender}
                  onChange={onChange}
                  placeholder='Select Gender'
                  options={[
                     { value: '', label: 'Select Gender' },
                     { value: 'male', label: 'Male' },
                     { value: 'female', label: 'Female' },
                     { value: 'other', label: 'Other' },
                  ]}
                  error={error.gender}
               />
               {error.gender && (
                  <Error style={{ marginTop: '1.5rem' }}>{error.gender}</Error>
               )}
            </Gender>
         </PersonalData>
      </>
   );
};

export default RegisterPersonalData;
