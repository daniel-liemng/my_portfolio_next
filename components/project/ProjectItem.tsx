'use client';

import styled from 'styled-components';
import {
  FaGithubSquare,
  FaShareSquare,
  FaArrowCircleRight,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { desc, title, github, image, slug, stack, url } = project;

  return (
    <ProjectWrapper>
      <div className='project-img-container'>
        <Image
          src={image}
          alt={title}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          height={300}
          width={300}
        />
      </div>
      <div className='project-info'>
        <h3>{title}</h3>
        <p>{desc[0]}</p>
        <div className='project-stack'>
          {stack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className='project-links'>
          <a href={github} target='_blank' rel='noreferrer noopener'>
            <FaGithubSquare className='project-icon'></FaGithubSquare>
          </a>
          <a href={url} target='_blank' rel='noreferrer noopener'>
            <FaShareSquare className='project-icon'></FaShareSquare>
          </a>
        </div>
        <div className='detail-link'>
          <Link href={`/projects/${slug}`}>
            <FaArrowCircleRight className='project-icon' />
          </Link>
        </div>
      </div>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.article`
  display: grid;
  margin-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 2px 2px 7px var(--secondary);
  padding: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }

  .project-img-container {
    width: 30rem;
    height: 15rem;
    border: 1px solid #ddd; /* Gray border */
    border-radius: 4px; /* Rounded border */
    padding: 7px; /* Some padding */

    @media screen and (max-width: 768px) {
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 1000px) {
      width: 20rem;
      height: 20rem;
    }
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-info {
    margin-top: 1rem;

    h3 {
      color: var(--primary);
    }

    .project-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;

      div {
        background-color: var(--secondary);
        padding: 0.3rem 0.4rem;
      }
    }

    .project-links {
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 5rem;
      display: flex;
      justify-content: space-between;
    }

    .project-icon {
      font-size: 1.7rem;
      color: var(--black);
      transition: var(--transition);

      &:hover {
        color: var(--third);
      }
    }

    .detail-link {
      display: flex;
      justify-content: flex-end;
      margin-right: 2rem;
      color: var(--black);
    }

    @media screen and (max-width: 768px) {
      p {
        width: 270px;
      }

      .detail-link {
        margin-right: 5rem;
      }
    }
  }
`;

export default ProjectItem;
