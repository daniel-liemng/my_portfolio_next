import Experience from '@/components/home/Experience';
import Hero from '@/components/home/Hero';
import ProjectList from '@/components/project/ProjectList';
import { projects } from '@/data/project';

const HomePage = () => {
  const featuredProjects = projects.filter((pro) => pro.featured);

  return (
    <>
      <main>
        <Hero />
        <Experience />
        <ProjectList
          title='Featured Projects'
          showLink
          projects={featuredProjects}
        />
      </main>
    </>
  );
};

export default HomePage;
