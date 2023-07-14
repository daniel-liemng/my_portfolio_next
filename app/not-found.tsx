'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Title from '@/components/shared/Title';

const NotFound = () => {
  return (
    <div className='page'>
      <main>
        <ErrorWrapper className='section section-center'>
          <Link href='/' className='btn'>
            Back to HomePage
          </Link>
          <div>
            <Title title='Page Not Found' />
            <Image
              src='/undraw_page_not_found_su7k.svg'
              alt='Portfolio'
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              width={300}
              height={300}
            />
          </div>
        </ErrorWrapper>
      </main>
    </div>
  );
};

const ErrorWrapper = styled.section`
  margin-top: 3rem;
`;

export default NotFound;
