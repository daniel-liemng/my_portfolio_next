'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/data/socialLinks';

const Hero = () => {
  return (
    <HeroWrapper>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
            }}
          >
            I'm <span>Liem Nguyen</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'tween',
              duration: 1,
              delay: 0.5,
            }}
          >
            Full Stack Web Developer
          </motion.h3>
          <div className='underline'></div>
          <a
            href='Resume_HoangLiemNguyen.pdf'
            download='Resume_HoangLiemNguyen'
            className='btn'
            style={{ marginRight: '1rem' }}
          >
            Resume
          </a>
          <Link href='/contact' className='btn'>
            Contact me
          </Link>

          <div className='social-links'>
            {socialLinks.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className='social-link'
                target='_blank'
                rel='noreferrer noopener'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </article>
        <Image
          src='/undraw_developer_activity_bv83.svg'
          className='hero-img'
          alt='Portfolio'
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          priority
          width={750}
          height={650}
        />
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  margin-top: -4rem;
  padding-top: 5rem;
  height: 100vh;
  position: relative;
  /* background: var(--white) */
  background: linear-gradient(118deg, var(--secondary) 30%, var(--third) 90%);
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 75% 100%, 25% 100%, 0 91%, 0 0);

  .hero-center {
    height: 100%;
    display: grid;
    align-items: center;
  }

  .hero-info {
    margin-left: 1.5rem;
  }

  .hero-info span {
    color: var(--white);
  }

  .underline {
    height: 5px;
    width: 20%;
    background: var(--white);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 2px;
  }

  .social-links {
    margin-top: 1rem;
    display: flex;
    width: 5rem;
    justify-content: space-between;
  }

  .social-link {
    font-size: 1.7rem;
    color: var(--black);
    transition: var(--transition);
  }

  .social-link:hover {
    color: var(--third);
  }

  .hero-img {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .hero-center {
      grid-template-columns: repeat(12, 1fr);
    }

    .hero-info h4 {
      font-size: 0.85rem;
    }

    .hero-info {
      grid-row: 1/1;
      grid-column: 1 / span 8;
    }
    .hero-img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }

  @media screen and (min-width: 1170px) {
    .hero-info h3 {
      font-size: 1.5rem;
    }

    .hero-info {
      grid-column: 1 / span 8;
    }

    .hero h3 {
      line-height: 1;
    }
  }
`;

export default Hero;
