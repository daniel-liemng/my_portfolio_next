'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Title from '@/components/shared/Title';
import { stack, info, stackIcons } from '@/data/about';

const AboutPage = () => {
  return (
    <div className='page'>
      <main>
        <AboutWrapper className='section section-center'>
          <Title title='About Me' />
          <div className='main-content'>
            <div className='about-img'>
              <div className='about-stack'>
                <h4>My technical skills:</h4>
                {stackIcons.map((name, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'tween',
                      duration: 1,
                      delay: 0.2 * index,
                    }}
                  >
                    <img src={name} alt='name' width='50px' height='50px' />
                  </motion.span>
                ))}
              </div>
              <Image
                src='/hero1.png'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                alt='about'
                priority
                width={400}
                height={400}
                className='about-image'
              />
            </div>
            <article className='about-info'>
              <div>
                {info.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </AboutWrapper>
      </main>
    </div>
  );
};

const AboutWrapper = styled.section`
  margin-top: 5rem;

  .main-content {
    display: flex;
    flex-direction: column;
  }

  .about-img {
    margin-bottom: 1rem;
    width: 22rem;
    display: flex;
    flex-direction: column;

    .about-image {
      margin-bottom: 2rem;
      width: 22rem;
    }

    h4 {
      margin-bottom: 1rem;
    }

    .about-stack span {
      display: inline-block;
      width: 50px;
      height: 50px;
      /* background: var(--secondary); */
      /* color: var(--black); */
      margin-right: 0.5rem;
      /* padding: 0.25rem 0.5rem; */
      /* text-transform: capitalize; */
      /* letter-spacing: 2px; */
      /* font-size: 0.85rem; */
      /* font-weight: bold; */
      margin-bottom: 0.7rem;
    }
  }

  .about-info p {
    line-height: 1.5;
    font-size: 1.1rem;
    padding-left: 1rem;
    text-align: justify;
  }

  @media screen and (min-width: 850px) {
    .main-content {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 4rem;
    }

    .about-img {
      grid-column: 1 / span 5;

      .about-image,
      .about-stack {
        width: 30rem;
      }
    }

    .about-info {
      grid-column: 6 / -1;
    }
  }
`;

export default AboutPage;
