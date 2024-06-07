'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/Languages/LanguageSwitcher';
import React, { useRef } from 'react';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/Styles/globals';

export default function LoginPage() {
   const t = useTranslations('Index');
   const [userData, setUserData] = useState(null);
   const [formData, setFormData] = useState({
      name: '',
      birth: '',
      email: '',
      password: '',
      confirmPassword: '',
      customer_since: '',
      gender: '',
      wish_list: [],
      buyed_games: [],
      payment_methods: [],
      image: '',
   });
   const [imageData, setImageData] = useState(null);

   const imageInputRef = useRef(null);
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };
   const handleRegister = async (e) => {
      e.preventDefault();
      await handleImageRegister();
      try {
         const response = await axios.post(
            'http://localhost:3001/auth/register/user',
            formData,
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         );

         console.log('usuario registrado ', response);
         setUserData(response.data);
      } catch (error) {
         if (
            error.response &&
            error.response.data &&
            error.response.data.message
         ) {
            console.error(error.response.data.message);
         }
      }
   };
   const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImageData(file);
      if (file) {
         setFormData({
            ...formData,
            image: file.name,
         });
      }
   };
   const handleImageRegister = async () => {
      try {
         const image = new FormData();
         image.append('image', imageData);

         const response = await axios.post(
            'http://localhost:3001/upload/image',
            image,
            {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            }
         );

         console.log('foto de usuario registrado ', response);
      } catch (error) {
         console.error('Erro ao cadastrar imagem:', error);
      }
   };
   return (
      <div>
         <h2>Register User</h2>
         <form onSubmit={handleRegister}>
            <input
               type='text'
               name='name'
               value={formData.name}
               onChange={handleChange}
               placeholder='Name'
            />
            <input
               type='text'
               name='birth'
               value={formData.birth}
               onChange={handleChange}
               placeholder='Birth'
            />
            <input
               type='email'
               name='email'
               value={formData.email}
               onChange={handleChange}
               placeholder='Email'
            />
            <input
               type='password'
               name='password'
               value={formData.password}
               onChange={handleChange}
               placeholder='Password'
            />
            <input
               type='password'
               name='confirmPassword'
               value={formData.confirmPassword}
               onChange={handleChange}
               placeholder='Confirm Password'
            />
            <input
               type='text'
               name='customer_since'
               value={formData.customer_since}
               onChange={handleChange}
               placeholder='Customer Since'
            />
            <select
               name='gender'
               value={formData.gender}
               onChange={handleChange}
               placeholder='genero'
            >
               <option value='male'>Male</option>
               <option value='female'>Female</option>
               <option value='other'>Other</option>
            </select>
            <input
               type='file'
               accept='image/*'
               ref={imageInputRef}
               onChange={handleImageChange}
            />
            <button type='submit'>Register</button>
         </form>
         {userData && (
            <div>
               <p>{userData.message}</p>
            </div>
         )}
      </div>
   );
}
