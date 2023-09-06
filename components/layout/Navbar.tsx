import styled from 'styled-components';
import { FaAlignCenter } from 'react-icons/fa';
import Link from 'next/link';

import { menuLinks } from '@/data/menuLinks';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <NavWrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'>
            <img src='/logo.png' alt='Logo' />
          </Link>
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignCenter />
          </button>
        </div>
        <ul className='nav-links'>
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  z-index: 200;
  /* background: var(--white); */
  background: linear-gradient(13deg, var(--secondary) 30%, var(--third) 99%);

  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header img {
    margin-bottom: 0.375rem;
    width: 4rem;
  }

  .toggle-btn {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    outline: transparent;
    color: var(--secondary);
    cursor: pointer;
    transition: var(--transition);
  }

  .toggle-btn:hover {
    color: var(--white);
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .nav-links li {
      margin-left: 2rem;
      list-style: none;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--primary);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
      text-decoration: none;
    }
    .nav-links a:hover {
      color: var(--white);
      /* border-bottom: 1px solid var(--secondary); */
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
  }

  @media screen and (min-width: 992px) {
    .navbar {
      background: transparent;
    }
  }
`;

export default Navbar;
