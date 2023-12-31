import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Social.css'
import { Link } from 'react-router-dom';
const Social = () => {
    return (
        
            <ul className='kakon_social_ul'>
                <Link to="https://github.com/KakonDebnath" target='_blank'><li className='hover:bg-black'><FaGithub size={20}/> gitHub</li></Link>
                <Link to="https://www.linkedin.com/in/kakanchandra96/" target='_blank'><li className='hover:bg-sky-500'><FaLinkedin size={24}/> Linked in</li></Link>
                <Link ><li className='hover:bg-red-500'><FaYoutube size={24} /> Youtube</li></Link>
                <Link to="https://web.facebook.com/kalloldebnath.kakon" target='_blank'><li className='hover:bg-blue-500'><FaFacebook size={24} /> Facebook</li></Link>
                <Link to="https://twitter.com/kakondebnath" target='_blank'><li className='hover:bg-blue-600'><FaTwitter size={24} /> Twitter</li></Link>
            </ul>

    );
};

export default Social;