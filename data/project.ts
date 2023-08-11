export const projects = [
  {
    id: '0',
    title: 'Job Search Dashboard',
    slug: 'job-search-dashboard',
    url: 'https://jobsearch-dashboard.vercel.app',
    github: 'https://github.com/daniel-liemng/job-search-next-prisma-supabase',
    image: '/project-9.png',
    featured: true,
    stack: [
      'Next.js',
      'NextAuth',
      'Prisma',
      'Supabase',
      'Typescript',
      'React Query',
      'React Hook Form',
      'TailwindCss',
    ],
    desc: [
      'A dashboard web application for employers to manage the company, category, and jobs.',
      'Users can login with email or Google account',
      'Images are uploaded and stored in Supabase bucket.',
    ],
  },
  {
    id: '1',
    title: 'School Board',
    slug: 'school-board',
    url: 'https://schoolboard-3vmnq0q5l-daniel-liemng.vercel.app',
    github: 'https://github.com/daniel-liemng/schoolboard_mern',
    image: '/project-1.png',
    featured: true,
    stack: [
      'React',
      'Node',
      'MongoDB',
      'React Query',
      'Typescript',
      'React Hook Form',
      'Cloudinary',
      'Material UI',
    ],
    desc: [
      'School Board is a MERN stack web application with Dashboard.',
      'There are 3 main user roles: student, instructor, and admin with 3 different UI layouts accordingly.',
      'Students need to login to register the listed courses.',
      'Instructors and Admin can access the Dashboard.',
    ],
  },
  {
    id: '2',
    title: 'Kitchen Shop',
    slug: 'kitchen-shop',
    url: 'https://kitchen-shop-react-contentful.netlify.app',
    github: 'https://github.com/daniel-liemng/kitchen_shop_react_contentful',
    image: '/project-2.png',
    featured: true,
    stack: ['React', 'Contentful CMS', 'Styled-Components', 'React Hooks'],
    desc: [
      'An e-commerce web application built with React.js, React Hooks, Styled Components.',
      'Fetch data from Contentful CMS.',
    ],
  },
  {
    id: '3',
    title: 'Employee Management',
    slug: 'employee-management',
    url: '',
    github: 'https://github.com/daniel-liemng/employee_react_django',
    image: '/project-3.png',
    featured: true,
    stack: [
      'React',
      'Django',
      'Django Rest Framework',
      'React Query',
      'React Hook Form',
      'Tailwindcss',
      'Typescript',
    ],
    desc: [
      'A web application with React and Django - Django Rest Framework to manage employees',
    ],
  },

  {
    id: '4',
    title: 'Peer Code Review',
    slug: 'peer-code-review',
    url: 'https://default-site.netlify.app',
    github: 'https://github.com/hatchways/team-dragonfruit',
    image: '/project-4.png',
    featured: true,
    stack: ['React', 'Node', 'MongoDB', 'Stripe', 'Material UI'],
    desc: [
      'A MERN stack web application that enables users to upload their code snippets and have them reviewed by other developers.',
      'Users can top up credits that is processed by Stripe.',
    ],
  },
  {
    id: '5',
    title: 'Chat App',
    slug: 'chat-app',
    url: 'https://chat-react-node-socketio.netlify.app',
    github: 'https://github.com/daniel-liemng/chat_socketio_react_node',
    image: '/project-5.png',
    featured: true,
    stack: ['React', 'Node', 'Socket.io'],
    desc: ['A real time chat application built with socket.io'],
  },
  {
    id: '6',
    title: 'Wide Networking',
    slug: 'wide-networking',
    url: 'https://connector-mern.netlify.app',
    github: 'https://github.com/daniel-liemng/connector_mern',
    image: '/project-6.png',
    featured: false,
    stack: ['React', 'Node', 'MongoDB', 'Material UI', 'Jsonwentoken'],
    desc: [
      'A web application platform to connect people.',
      'Users need to log in to access the dashboard where they can create profile, add posts, add comments.',
      'Guests can view all users and their profiles.',
    ],
  },
  {
    id: '7',
    title: 'Book Shelf',
    slug: 'book-shelf',
    url: 'https://bookshelf-vue.firebaseapp.com',
    github: 'https://github.com/daniel-liemng/bookshelf_project',
    image: '/project-7.png',
    featured: false,
    stack: ['Vue', 'Vuetify', 'Firebase', 'Firestore'],
    desc: [
      'A bookshelf dashboard where users need to register or login to access dashboard.',
      'User can view, create, update and delete books',
    ],
  },
  {
    id: '8',
    title: 'Restaurant UI',
    slug: 'restaurant-ui',
    url: 'https://nextrestaurant-nine.vercel.app',
    github: 'https://github.com/daniel-liemng/restaurant_ui_next',
    image: '/project-8.png',
    featured: true,
    stack: ['Next', 'TailwindCss', 'Framer Motion'],
    desc: [
      'A restaurant UI clone from Webflow template: https://silverspoon-template.webflow.io',
    ],
  },
  // {
  //   id: '1',
  //   title: '',
  //   slug: '',
  //   url: '',
  //   github: '',
  //   image: '/project-1.png',
  //   featured: true,
  //   stack: [],
  //   desc: [],
  // },
];
