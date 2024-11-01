import axios from 'axios';

export const ImageRegister = async (imageData) => {
   if (!imageData) return;

   try {
      const formData = new FormData();
      formData.append('image', imageData);
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/upload/image`, formData, {
         headers: { 'Content-Type': 'multipart/form-data' },
      });
   } catch (error) {
      console.error('Error uploading image:', error);
   }
};
