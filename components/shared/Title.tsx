'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleWrapper>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
      >
        {title || 'default title'}
      </motion.h2>
      <div className='underline'></div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    color: var(--primary);
  }

  .underline {
    height: 5px;
    width: 10%;
    background: var(--third);
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

export default Title;
