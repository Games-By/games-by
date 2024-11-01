import React from 'react';
import styled from 'styled-components';
import SkeletonEffect from '../Skeleton';

const SkeletonContainer = styled.div`
   max-width: 100%;
   padding: 0 3rem;
   margin: 8rem 0 2rem;
   display: grid;
   grid-template-areas:
      'game info'
      'comments info';
   justify-content: space-between;
   align-items: flex-start;
   grid-template-columns: minmax(50%, 100%) 30rem;
   gap: 1rem 3rem;

   .game {
      grid-area: game;
      background-color: rgba(var(--light-gray), 0.5);
      border-radius: 2rem;
      position: relative;
      max-width: 100%;
      padding: 4rem;

      .top {
         display: flex;
         justify-content: flex-end;
         margin-bottom: 2rem;
         @media screen {
            @media (max-width: 1600px) {
               margin-bottom: 1.6rem;
            }
            @media (max-width: 600px) {
               margin-bottom: 1.2rem;
            }
         }
      }
      .infos {
         display: grid;
         position: relative;
         grid-template-areas:
            'cover name name'
            'cover description description';
         gap: 1rem;
         grid-template-rows: 4rem auto;
         justify-content: start;
         justify-items: stretch;

         .cover {
            grid-area: cover;
            width: 25rem;
            height: 33rem;
            object-fit: cover;
            border-radius: 1rem;

            @media screen {
               @media (max-width: 1440px) {
                  width: 22rem;
                  height: 30rem;
               }
               @media (max-width: 768px) {
                  width: 100%;
                  height: 30rem;
               }
               @media (max-width: 600px) {
                  height: 25rem;
               }
               @media (max-width: 460px) {
                  height: 20rem;
               }
            }
         }
         .name {
            grid-area: name;

            @media screen {
               @media (max-width: 1660px) {
                  width: 30rem;
               }
               @media (max-width: 1510px) {
                  width: 20rem;
               }
               @media (max-width: 1400px) {
                  width: 35rem;
               }
               @media (max-width: 500px) {
                  width: 70%;
               }
            }
         }
         .description {
            grid-area: description;
            max-width: 65rem;
            * {
               margin-bottom: 1rem;
            }

            @media screen {
               @media (max-width: 768px) {
                  text-align: center;
               }
            }
         }
         .price {
            grid-area: price;
            position: absolute;
            right: 0;
            bottom: 0;

            @media screen {
               @media (max-width: 768px) {
                  position: relative;
                  margin: 2rem 0;
               }
               @media (max-width: 440px) {
                  margin: 1rem 0;
               }
            }
         }
         @media screen {
            @media (max-width: 768px) {
               grid-template-areas:
                  'name'
                  'cover '
                  'description '
                  'genres'
                  'price '
                  'buttons';
               text-align: end;
               justify-content: center;
               grid-template-columns: 100%;
               grid-template-rows: auto;

               .price {
                  margin: 0 auto;
               }
            }
         }
      }
      .platforms {
         width: 100%;
         height: 7rem;
         border-radius: 1rem;
         background-color: rgba(var(--dark), 0.5);
         margin: 1rem 0;
      }
      .medias {
         display: flex;
         width: auto;
         gap: 0 1rem;
         margin-top: 2rem;
         flex-wrap: wrap;

         .media {
            margin-bottom: 1rem;
            width: 32.5%;
            height: 23.6rem;
            @media (max-width: 1700px) {
               height: 20rem;
            }
            @media (max-width: 1580px) {
               height: 17rem;
               width: 32%;
            }
            @media (max-width: 1440px) {
               height: 15rem;
            }
            @media (max-width: 768px) {
               width: 48%;
               margin: 0 auto 1rem;
            }
            @media (max-width: 500px) {
               width: 100%;
            }
         }
      }
      @media screen {
         @media (max-width: 1600px) {
            padding: 3rem;
         }
         @media (max-width: 1400px) {
            padding: 2rem 1rem;
         }
      }
   }
   .info {
      grid-area: info;
      background-color: rgba(var(--light-gray), 0.5);
      height: 100%;
      min-width: 30rem;
      border-radius: 2rem;

      @media (max-width: 1600px) {
         min-width: 29.8rem;
      }
   }
   .comments {
      grid-area: comments;
   }
   @media screen {
      @media (max-width: 1600px) {
         gap: 1rem 1.5rem;
      }
      @media (max-width: 1400px) {
         flex-direction: column;
         grid-template-areas:
            'game'
            'info'
            'comments';
         grid-template-columns: minmax(100%, 100%);
      }
      @media (max-width: 1024px) {
         padding: 0 1rem;
      }
      @media (max-width: 768px) {
         margin: 6rem 0 2rem;
      }
   }
`;

const Buttons = styled.div`
   grid-area: buttons;
   position: absolute;
   right: 0;
   top: 0rem;
   width: 22rem;
   display: flex;
   justify-content: flex-end;
   flex-wrap: wrap;
   gap: 1rem;
   border-radius: 1rem;

   .buy {
      width: 15.3rem;
      height: 3.8rem;
      @media screen {
         @media (max-width: 1600px) {
            width: 9.8rem;
            height: 3.3rem;
         }
      }
   }

   .cart {
      width: 5.5rem;
      height: 4rem;
      @media screen {
         @media (max-width: 1600px) {
            width: 5rem;
            height: 3.5rem;
         }
      }
   }

   .wish {
      width: inherit;
      max-width: none;
   }

   @media screen {
      @media (max-width: 1600px) {
         width: 16rem;
      }
      @media (max-width: 768px) {
         position: initial;
         width: auto;
         flex-wrap: nowrap;
         flex-direction: column;
         width: 80%;
         max-width: 35rem;
         margin: 0 auto;

         .buy {
            width: 100%;
         }
         .cart {
            width: 100%;
            max-width: none;
         }

         .wish {
            width: 100%;
            white-space: nowrap;
         }
      }
   }
`;

const GameSkelleton = () => {
   return (
      <SkeletonContainer>
         <div className='game'>
            <div className='top'>
               <SkeletonEffect height={'2.8rem'} width={'16.2rem'} className={`community-button`} />
            </div>
            <div className='infos'>
               <SkeletonEffect height={'33rem'} width={'25rem'} className={`cover`} />
               <SkeletonEffect height={'4rem'} width={'40rem'} className={`name`} />
               <div className='description'>
                  <SkeletonEffect height={'1.7rem'} width={'100%'} className={``} />
                  <SkeletonEffect height={'1.7rem'} width={'95%'} className={``} />
               </div>
               <Buttons>
                  <SkeletonEffect height={'2.8rem'} width={'16.2rem'} className={`buy`} />
                  <SkeletonEffect height={'2.8rem'} width={'16.2rem'} className={`cart`} />
                  <SkeletonEffect height={'2.8rem'} width={'16.2rem'} className={`wish`} />
               </Buttons>
               <SkeletonEffect height={'4.5rem'} width={'16rem'} className={`price`} />
            </div>
            <div className='platforms'></div>
            <div className='medias'>
               {[...Array(5)].map((_, i) => (
                  <SkeletonEffect key={i} height={'33rem'} width={'25rem'} className={`media`} />
               ))}
            </div>
         </div>
         <div className='info'></div>
      </SkeletonContainer>
   );
};

export default GameSkelleton;
