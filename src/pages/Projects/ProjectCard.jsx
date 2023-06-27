import { FaGithub } from 'react-icons/fa6';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
const ProjectCard = ({ title, description, technologies, screenshot, LiveLink, repoLink_client, repoLink_server }) => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-2xl md:flex justify-between items-center">
            <div className='md:w-1/2'>
                <h2 className="kakon_text_background text-3xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4 text-md text-justify">{description}</p>
                <div className='space-y-3'>
                    <h2 className='kakon_text_background text-3xl font-bold '>Technologies</h2>
                    <div className="">
                        {technologies.map((tech) => (
                            <span className='capitalize px-3 rounded-md bg-blue-500 text-white py-1 mr-2 inline-block mb-2' key={tech}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
            {/* <img className="w-full mb-4" src={screenshot} alt={title} /> */}
            <div className='md:w-1/2'>
                <div className='overflow-y-auto h-72 mb-5'>
                    <LazyLoadImage
                        alt={title}
                        effect="blur"
                        src={screenshot} />
                </div>
                <div className='flex gap-3 justify-center'>
                    <Link
                        to={LiveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                        Live Site
                    </Link>
                    <Link
                        to={repoLink_client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-3"
                    >
                        <FaGithub /> GitHub Client
                    </Link>
                    <Link
                        to={repoLink_server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center gap-3"
                    >
                        <FaGithub /> GitHub Server
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
