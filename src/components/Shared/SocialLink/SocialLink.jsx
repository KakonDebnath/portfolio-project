import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLink = () => {
    return (
        <div className='flex justify-center text-lg gap-2'>
            <Link to="https://github.com/KakonDebnath" target='_blank'><FaGithub className='' /></Link>
            <Link to="https://www.linkedin.com/in/kakanchandra96/" target='_blank'></Link>
            <Link ><FaLinkedin className='text-blue-500' /></Link>
            <Link ><FaYoutube className='text-red-500' /></Link>
            <Link to="https://web.facebook.com/kalloldebnath.kakon" target='_blank'><FaFacebook className='text-blue-500' /></Link>
            <Link to="https://twitter.com/kakondebnath" target='_blank'><FaTwitter className='text-sky-500' /></Link>
        </div>
    );
};

export default SocialLink;