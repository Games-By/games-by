'use client';
import axios from 'axios';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import GlobalStyle from '@/Styles/globals';
require('dotenv').config();

export default function Register() {
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
      try {
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/register/user`,
            formData,
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            }
         );
         await handleImageRegister();

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
      if (!imageData) return;
      try {
         const formData = new FormData();
         formData.append('image', imageData);
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/upload/image`,
            formData,
            {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            }
         );

      } catch (error) {
         console.error('Erro ao cadastrar imagem:', error);
      }
   };
   return (
      <>
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
      </>
   );
}
