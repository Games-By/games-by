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

const GameAdditionalInfo = ({ dlcs, updates, playTime, awards }) => {
   return (
      <AdditionalInfoContainer>
         <Section className='full-width'>
            <SectionTitle>DLC's</SectionTitle>
            <div className='items'>
               {dlcs.length > 0 ? (
                  dlcs.map((dlc, index) => (
                     <DlcItem key={index}>
                        <Image
                           src={dlc.cover}
                           width={160}
                           height={160}
                           className='cover'
                        />
                        <span>{dlc.name}</span>
                        <span>
                           {new Date(dlc.releaseDate).toLocaleDateString()}
                        </span>
                     </DlcItem>
                  ))
               ) : (
                  <p>Sem DLCs disponíveis</p>
               )}
            </div>
         </Section>

         <Section className='full-width'>
            <SectionTitle>Prêmios</SectionTitle>
            <div className='items'>
               {awards.length > 0 ? (
                  awards.map((award, index) => (
                     <AwardItem key={index}>
                        <FaTrophy />
                        <p className='award'>{award.name}</p>
                        <p className='category'>{award.category}</p>
                     </AwardItem>
                  ))
               ) : (
                  <p>Sem prêmios disponíveis</p>
               )}
            </div>
         </Section>

         <Section className='full-width'>
            <SectionTitle>Últimas Atualizações</SectionTitle>
            <div className='updates'>
               {updates.length > 0 ? (
                  updates.map(
                     (update, index) =>
                        index < 3 && (
                           <UpdateItem key={index}>
                              <p>
                                 <span>Versão:</span>
                                 {update.version}
                              </p>
                              <p>
                                 <span>Data de Lançamento:</span>
                                 {new Date(
                                    update.releaseDate
                                 ).toLocaleDateString()}
                              </p>
                              <p>
                                 <span>Notas:</span>
                                 {update.notes}
                              </p>
                           </UpdateItem>
                        )
                  )
               ) : (
                  <p>Sem atualizações recentes</p>
               )}
            </div>
         </Section>

         {/* <SocialMedias className='full-width'>Social</SocialMedias> */}
      </AdditionalInfoContainer>
   );
};

export default GameAdditionalInfo;
