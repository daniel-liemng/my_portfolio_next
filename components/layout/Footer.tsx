import styled from 'styled-components';

import { socialLinks } from '@/data/socialLinks';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-links'>
        <ul className='social-links'>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className='social-link'
                target='_blank'
                rel='noreferrer noopener'
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <h4>copyright &copy; {new Date().getFullYear()}</h4>
        <h4>Liem Nguyen - all rights reserved</h4>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 8rem;
  background: var(--secondary);

  text-align: center;
  display: grid;
  place-items: center;

  .footer-links {
    margin: 0 auto;
  }

  .social-links {
    margin: 0.5rem auto;
    width: 7rem;
    display: flex;
    justify-content: space-between;
  }

  .social-link {
    font-size: 1.75rem;
    color: var(--third);
    transition: var(--transition);
  }

  .social-link:hover {
    color: var(--primary);
  }

  h4 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--white);
    text-transform: capitalize;
  }
`;

export default Footer;
