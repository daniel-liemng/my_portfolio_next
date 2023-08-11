'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCloudsmith } from 'react-icons/fa';
import Link from 'next/link';

import Title from '../shared/Title';
import { jobs } from '@/data/job';
import { Job } from '@/types/job';

const Experiences = () => {
  const [value, setValue] = useState(0);
  const [job, setJob] = useState(jobs[value]);

  useEffect(() => {
    setJob(jobs[value]);
  }, [value]);

  return (
    <ExperienceWrapper className='section'>
      <Title title='Experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job: Job, index) => (
            <button
              onClick={() => setValue(index)}
              key={index}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article className='jobs-desc'>
          <h3>{job.position}</h3>
          <h4>{job.company}</h4>
          <p>{job.date}</p>
          {job.jobDesc.map((item, index) => (
            <div key={index} className='job-desc'>
              <FaCloudsmith className='job-icon' />
              <p>{item}</p>
            </div>
          ))}
        </article>
      </div>

      <Link href='/about' className='btn center-btn' style={{ width: '20rem' }}>
        Want to know more about me?
      </Link>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.section`
  .jobs-center {
    width: 80vw;
    height: 500px; ///// modify height if content is long
    min-height: 500px;
    margin: 0 auto;
    max-width: 1170px;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .job-btn {
    outline: transparent;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    color: var(--primary);
  }

  .job-btn:hover {
    color: var(--third);
  }

  .active-btn {
    color: var(--primary);
    box-shadow: 0 2px var(--third);
    font-weight: bold;
    font-size: 1.5rem;
  }

  .jobs-desc h3 {
    color: var(--secondary);
    font-size: 1.4rem;
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .job-desc p {
    margin-bottom: 0;
    font-size: 1rem;
  }

  .job-icon {
    font-size: 1.2rem;
    color: var(--third);
  }

  @media screen and (max-width: 450px) {
    .jobs-center {
      height: 550px;
      .btn-container {
        flex-direction: column;
        justify-content: flex-start;
        gap: '1.5rem';
      }
    }
  }

  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 var(--third);
    }
    .job-btn:hover {
      box-shadow: -2px 0 var(--secondary);
    }
  }
`;

export default Experiences;
