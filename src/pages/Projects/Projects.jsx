
import SectionTitle from '../../components/Shared/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard'; // Assuming you have a separate ProjectCard component

function Projects() {
  // Project data
  const projects = [
    {
      title: 'Fancy Drawing School',
      description: 'The Drawing School Project is an online platform that offers a wide range of drawing classes taught by experienced instructors. Users can register using email and password or login with their Google accounts. The platform provides a seamless enrollment process and secure payment system. Users can explore class descriptions, select their preferred classes, and track their payment history. The platform also incorporates role-based access control, allowing administrators to manage user roles and instructors to add and monitor classes. The authentication is powered by Google Firebase and authorization is based on JSON Web Tokens (JWT), ensuring a secure and personalized learning experience for users.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Json Web Token', 'Firebase', 'react hook form', 'axios', 'react tan stack query'],
      screenshot: 'https://i.ibb.co/qjbmSQN/project-1.png',
      LiveLink: 'https://assignment-12-bb775.web.app/',
      repoLink_client: 'https://github.com/KakonDebnath/fancy_drawing_school_client',
      repoLink_server: 'https://github.com/KakonDebnath/fancy_drawing_school_server',
    },
    {
      title: 'Kabbo Toys',
      description: ' The Toy Store is an exciting online destination for toy lovers. Users can register using their email and password or choose to login with their Google or GitHub accounts, benefiting from the secure authentication framework provided by Google Firebase. Once authenticated, users can explore the various features of the platform, including "Add A Toy," "My Toys," and "Toy Details." In the "Add A Toy" section, users can effortlessly create new toy listings, providing detailed information such as name, description, price, and images. The "My Toys" section allows users to manage their toy inventory, enabling them to update, delete, and monitor their listed toys. With the Toy Store\'s seamless authentication powered by Google Firebase, toy enthusiasts can enjoy a convenient and trustworthy toy shopping experience.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Firebase'],
      screenshot: 'https://i.ibb.co/b6Y870W/Home-Kabbo-Toys.png',
      LiveLink: 'https://kabbo-toys.web.app/',
      repoLink_client: 'https://github.com/KakonDebnath/kabbo-toys-client',
      repoLink_server: 'https://github.com/KakonDebnath/kabbo_toy_server',
    },
    {
      title: 'Kabbo Toys',
      description: ' The Toy Store is an exciting online destination for toy lovers. Users can register using their email and password or choose to login with their Google or GitHub accounts, benefiting from the secure authentication framework provided by Google Firebase. Once authenticated, users can explore the various features of the platform, including "Add A Toy," "My Toys," and "Toy Details." In the "Add A Toy" section, users can effortlessly create new toy listings, providing detailed information such as name, description, price, and images. The "My Toys" section allows users to manage their toy inventory, enabling them to update, delete, and monitor their listed toys. With the Toy Store\'s seamless authentication powered by Google Firebase, toy enthusiasts can enjoy a convenient and trustworthy toy shopping experience.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Firebase'],
      screenshot: 'https://i.ibb.co/b6Y870W/Home-Kabbo-Toys.png',
      LiveLink: 'https://kabbo-toys.web.app/',
      repoLink_client: 'https://github.com/KakonDebnath/kabbo-toys-client',
      repoLink_server: 'https://github.com/KakonDebnath/kabbo_toy_server',
    },
    {
      title: 'Chef Master',
      description: 'The Chef recipe website is a platform where users can register using their email and password or choose to login with their Google or GitHub accounts. The website leverages Google Firebase for authentication, ensuring a secure login process. Once logged in, users can explore the Chef recipe page, which features a wide range of culinary delights. The website implements strict authentication checks to ensure only authorized users can access the recipe page, guaranteeing privacy and security. With an intuitive user interface and extensive recipe collection, the website offers a seamless experience for cooking enthusiasts to discover and share their favorite recipes.',
      technologies: ['React', 'Express.js', 'Firebase', 'react-ratings', 'swiper js'],
      screenshot: 'https://i.ibb.co/NKw78dM/Food-Corner.png',
      LiveLink: 'https://comforting-manatee-2bc134.netlify.app/',
      repoLink_client: 'https://github.com/KakonDebnath/chef-master-client',
      repoLink_server: 'https://github.com/KakonDebnath/chef-master-server',
    },
  ];

  return (
    <div id="projects" className="container mx-auto ">
      <SectionTitle>My Recent Projects</SectionTitle>
      <div className="">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
