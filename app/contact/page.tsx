'use client';

import styled from 'styled-components';

import Title from '@/components/shared/Title';

const ContactPage = () => {
  return (
    <div className='page'>
      <main>
        <ContactWrapper className='section section-center'>
          <Title title='leave a message' />
          <article className='contact-form'>
            <form action='https://formspree.io/mgenpvan' method='POST'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='your name...'
                  className='form-control'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  name='_replyto'
                  id='email'
                  placeholder='your email...'
                  className='form-control'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='messagge'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  placeholder='Drop me a line...'
                  className='form-control'
                  required
                ></textarea>
              </div>

              <button type='submit' className='btn center-btn'>
                send message
              </button>
            </form>
          </article>
        </ContactWrapper>
      </main>
    </div>
  );
};

const ContactWrapper = styled.section`
  margin-top: 2.5rem;
  display: grid;
  place-items: center;

  .contact-form {
    background: var(--white);
    width: 90vw;
    max-width: 35rem;
    box-shadow: 2px 2px 7px var(--secondary);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    padding: 0.5rem 1.5rem;

    input[type='text'],
    textarea {
      font-family: 'Merriweather', serif;
      border: 1px solid grey;
    }
  }

  .form-group label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    letter-spacing: var(--spacing);
    font-weight: bold;
    margin-left: 0.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    outline: none;
    color: var(--black);
    font-size: 1.1rem;
  }
`;

export default ContactPage;
