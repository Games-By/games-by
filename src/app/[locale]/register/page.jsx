'use client';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { RegisterStyles, RegisterForm } from './RegisterStyles';
import RegisterPersonalData from '@/components/Register/RegisterPersonalData';
import RegisterAccountData from '@/components/Register/RegisterAccountData';
import { formatBirth } from '@/utils/formatBirth';
import { userRegister } from '@/Services/client-data/userRegister';
import { formatUserID } from '@/utils/formatUserId';
import Button from '@/components/Button/Button';
import { useRouter } from '../../../../navigation';
require('dotenv').config();

const Register = () => {
   const t = useTranslations('Index');
   const router = useRouter();
   const locale = useLocale();
   const [formData, setFormData] = useState({
      name: '',
      birth: '',
      email: '',
      confirmEmail: '',
      userID: '',
      password: '',
      confirmPassword: '',
      customer_since: '',
      geolocation: '',
      gender: '',
      wish_list: [],
      buyed_games: [],
      payment_methods: [],
      image: '',
   });
   const [imageData, setImageData] = useState(null);
   const [error, setError] = useState({
      name: '',
      birth: '',
      email: '',
      confirmEmail: '',
      userID: '',
      password: '',
      confirmPassword: '',
      gender: '',
   });
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setError((prevError) => ({ ...prevError, [name]: '' }));

      if (name === 'name') {
         const lettersRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;
         if (!lettersRegex.test(value)) return;
      }
      if (name === 'birth') {
         const formattedBirth = formatBirth({ ...formData, [name]: value });
         setFormData((prevData) => ({
            ...prevData,
            [name]: formattedBirth,
         }));
      } else if (name === 'userID') {
         const formattedUserID = formatUserID({ ...formData, [name]: value });
         setFormData((prevData) => ({
            ...prevData,
            [name]: formattedUserID,
         }));
      } else {
         setFormData((prevData) => ({
            ...prevData,
            [name]: value,
         }));
      }
   };

   function handleImageChange(e) {
      const file = e.target.files[0];
      setImageData(file);
      if (file) {
         setFormData((prevData) => ({ ...prevData, image: file.name }));
      }
   }

   const register = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);
         await userRegister(e, formData, imageData, setError, locale);
         // router.push('/login');
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <RegisterStyles>
            <RegisterForm onSubmit={register}>
               <RegisterPersonalData
                  data={formData}
                  error={error}
                  onChange={handleChange}
               />
               <RegisterAccountData
                  data={formData}
                  error={error}
                  onChange={handleChange}
                  imageChange={handleImageChange}
               />
               <br />
               <Button
                  onClick={register}
                  currentColor={'rgba(var(--purple-1))'}
                  title={'Register'}
                  hoverColor={'rgba(var(--cyan))'}
                  loading={loading}
               />
            </RegisterForm>
         </RegisterStyles>
      </>
   );
};

export default Register;
