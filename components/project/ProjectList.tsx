'use client';

import styled from 'styled-components';

import ProjectItem from './ProjectItem';
import Title from '../shared/Title';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectListProps {
  title: string;
  projects: Project[];
  showLink?: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({
  title,
  projects,
  showLink,
}) => {
  return (
    <ProjectsWrapper className='section'>
      <Title title={title} />
      <div className='section-center projects'>
        {projects.map((project: Project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      {showLink && (
        <Link href='/projects' className='btn center-btn'>
          More Projects
        </Link>
      )}
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  .projects {
    width: 80vw;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

export default ProjectList;
