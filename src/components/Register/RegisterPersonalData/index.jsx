import { useLocale } from 'next-intl';
import Input from '../../Input/Input';
import { Gender, PersonalData } from './PersonalData';
import { Title } from '@/app/[locale]/register/RegisterStyles';
import { Label } from '@/components/Input/InputStyles';

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
            {locale === 'pt' && (
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
               <Label>Gender *</Label>
               <select
                  name='gender'
                  value={data.gender}
                  onChange={onChange}
                  placeholder='Gender'
                  className='selector'
               >
                  <option value=''>Select Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
               </select>
               {/* {data.gender !== 'male' && data.gender !== 'female' && data.gender !== '' && (
                  <Input
                     name={'gender'}
                     onChange={onChange}
                     placeholder={'Wich ?'}
                     value={data.gender}
                     className='other'
                  />
               )} */}
            </Gender>
         </PersonalData>
      </>
   );
};

export default RegisterPersonalData;
