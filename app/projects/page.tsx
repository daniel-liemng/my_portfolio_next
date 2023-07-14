'use client';

import styled from 'styled-components';

import { projects } from '@/data/project';
import ProjectList from '@/components/project/ProjectList';

const ProjectsPage = () => {
  return (
    <>
      <main>
        <AllProjectsWrapper>
          <ProjectList title='Projects' projects={projects} />
        </AllProjectsWrapper>
      </main>
    </>
  );
};

const AllProjectsWrapper = styled.section`
  margin-top: 5rem;
`;

export default ProjectsPage;
