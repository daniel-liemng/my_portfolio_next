'use client';

import styled from 'styled-components';
import { FaGithubSquare, FaShareSquare, FaCentos } from 'react-icons/fa';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { projects } from '@/data/project';
import { Project } from '@/types/project';
import Image from 'next/image';

const ProjectDetailsPage = () => {
  const params = useParams();

  const project: Project = projects?.find((pro) => pro.slug === params?.slug)!;

  const { id, title, slug, featured, github, url, desc, image, stack } =
    project;

  if (!project) {
    return <>No FOund</>;
  }

  return (
    <>
      <main>
        <ProjectDetailsWrapper className='section section-center'>
          <Link href='/projects' className='btn'>
            Back to Projects
          </Link>
          <h2>{title}</h2>
          <div className='brief-info'>
            <div className='img-container'>
              <Image
                src={image}
                alt={title}
                priority
                style={{
                  width: '50rem',
                  height: '100%',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
                height={1000}
                width={1000}
              />
            </div>
            <div className='stacks'>
              <div className='project-stack'>
                {stack.map((item, index) => (
                  <span key={index}>{item}</span>
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
            </div>
          </div>
          <div className='details-info'>
            <h4 className='desc-title'>Project Description:</h4>
            {desc.map((item, index) => (
              <p key={index} className='desc-item'>
                <FaCentos className='desc-icon' /> {item}
              </p>
            ))}
          </div>
        </ProjectDetailsWrapper>
      </main>
    </>
  );
};

const ProjectDetailsWrapper = styled.section`
  margin-top: 4rem;

  h2 {
    color: var(--primary);
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
  }

  .brief-info {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .img-container {
      width: '100%';
      margin-bottom: 1.5rem;
      border: 1px solid #ddd; /* Gray border */
      border-radius: 4px; /* Rounded border */
      padding: 7px; /* Some padding */
    }

    .project-stack span {
      background-color: var(--secondary);
      color: var(--white);
      display: block;
      margin-bottom: 0.7rem;
      text-align: center;
      padding: 0.3rem 0.6rem;
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
  }

  .details-info {
    margin-top: 1rem;

    .desc-title {
      color: var(--primary);
      margin-bottom: 1rem;
    }

    .desc-item {
      margin-left: 1rem;
    }

    .desc-icon {
      color: var(--third);
      margin-right: 0.4rem;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 240px;
      margin-bottom: 0.5rem;
    }

    .brief-info {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 998px) {
    img {
      width: 500px;
      margin-bottom: 0.5rem;
    }

    .brief-info {
      flex-direction: column;

      .project-stack span {
        display: inline-block;
        margin-right: 0.5rem;
      }
    }
  }
`;

export default ProjectDetailsPage;
