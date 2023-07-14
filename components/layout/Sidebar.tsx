import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Link from 'next/link';

import { socialLinks } from '@/data/socialLinks';
import { menuLinks } from '@/data/menuLinks';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper>
      <div className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
        <button className='close-btn' onClick={(e) => toggleSidebar()}>
          <FaArrowCircleLeft />
        </button>
        <div>
          <ul className='sidebar-links'>
            {menuLinks.map((link) => (
              <li key={link.id} onClick={(e) => toggleSidebar()}>
                <Link href={link.url} className='sidebar-link'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
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
        </div>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  .sidebar {
    background: var(--white);
    padding-top: -7rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    z-index: 999;
    display: grid;
    opacity: 0;
    transform: translateX(-100%);
    transition: var(--transition);
  }

  .show-sidebar {
    opacity: 1;
    transform: translateX(0%);
  }

  .sidebar-links {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }

  .sidebar-links li a {
    margin-left: 2rem;
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: var(--spacing);
    margin-bottom: 1rem;
    display: inline-block;
    transition: var(--transition);
    padding: 0.4rem 0.7rem;
    /* border-radius: var(--radius); */
    font-weight: bolder;
  }

  .sidebar-links li a:hover {
    margin-left: 3rem;
    background: var(--third);
    color: var(--white);
    font-weight: bolder;
  }

  .close-btn {
    position: absolute;
    top: 3%;
    left: 80%;
    font-size: 2rem;
    background: transparent;
    border: transparent;
    outline: transparent;
    color: var(--third);
    cursor: pointer;
  }

  .close-btn:hover {
    color: var(--secondary);
  }

  .social-links {
    margin-left: 3rem;
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
`;

export default Sidebar;
