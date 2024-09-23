import Image from 'next/image';
import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import {
   AdditionalInfoContainer,
   AwardItem,
   DlcItem,
   Section,
   SectionTitle,
   SocialMedias,
   UpdateItem,
} from './styles';
import { useLocale, useTranslations } from 'next-intl';

const GameAdditionalInfo = ({ dlcs, updates, playTime, awards }) => {
   const t = useTranslations('GamePage');
   const locale = useLocale();

   const formattedDate = (date) => {
      const options = { timeZone: 'UTC' };

      return new Date(date).toLocaleDateString(locale, options);
   };
   return (
      <AdditionalInfoContainer>
         <Section className='full-width'>
            <SectionTitle>DLC's</SectionTitle>
            <div className='items'>
               {dlcs.length > 0
                  ? dlcs.map((dlc, index) => (
                       <DlcItem key={index}>
                          <Image
                             src={
                                dlc.cover
                                   ? dlc.cover
                                   : 'https://www.svgrepo.com/show/340721/no-image.svg'
                             }
                             alt='cover'
                             width={160}
                             height={160}
                             className='cover'
                          />
                          <span>{dlc.name}</span>
                          <span>{formattedDate(dlc.releaseDate)}</span>
                       </DlcItem>
                    ))
                  : null}
            </div>
         </Section>

         <Section className='full-width'>
            <SectionTitle>{t('awards')}</SectionTitle>
            <div className='items'>
               {awards.length > 0
                  ? awards.map((award, index) => (
                       <AwardItem key={index}>
                          <FaTrophy />
                          <p className='award'>{award.name}</p>
                          <p className='category'>{award.category}</p>
                       </AwardItem>
                    ))
                  : null}
            </div>
         </Section>

         <Section className='full-width'>
            <SectionTitle>{t('updates.title')}</SectionTitle>
            <div className='updates'>
               {updates.length > 0
                  ? updates.map(
                       (update, index) =>
                          index < 3 && (
                             <UpdateItem key={index}>
                                <p>
                                   <span>{t('updates.version')}:</span>
                                   {update.version}
                                </p>
                                <p>
                                   <span>{t('updates.launch')}:</span>
                                   {formattedDate(update.releaseDate)}
                                </p>
                                <p>
                                   <span>{t('updates.notes')}:</span>
                                   {update.notes}
                                </p>
                             </UpdateItem>
                          )
                    )
                  : null}
            </div>
         </Section>

         {/* <SocialMedias className='full-width'>Social</SocialMedias> */}
      </AdditionalInfoContainer>
   );
};

export default GameAdditionalInfo;
