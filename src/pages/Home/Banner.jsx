import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Social from './Social';
const Banner = () => {
    return (
        <>
            <div className='md:flex gap-10 items-center py-5 md:py-10 md:mt-10 max-w-7xl mx-auto relative'>
                <div data-aos="fade-right" data-aos-duration="1500" className='md:w-1/2 text-center md:text-left'>
                    <div className='my-5 space-y-2'>
                        <div className=' relative md:hidden border-2 border-orange-500 rounded-xl w-1/2 mx-auto'>
                            <img src="https://i.ibb.co/QHdQjWm/IMG20230626183352.png" alt="" />
                            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                                <div className='flex justify-center text-lg gap-2'>
                                    <Link to="https://github.com/KakonDebnath" target='_blank'><FaGithub className=''/></Link>
                                    <Link  to="https://www.linkedin.com/in/kakanchandra96/" target='_blank'></Link>
                                    <Link ><FaLinkedin className='text-blue-500' /></Link>
                                    <Link ><FaYoutube className='text-red-500' /></Link>
                                    <Link to="https://web.facebook.com/kalloldebnath.kakon" target='_blank'><FaFacebook className='text-blue-500'/></Link>
                                    <Link to="https://twitter.com/kakondebnath" target='_blank'><FaTwitter className='text-sky-500' /></Link>
                                </div>
                            </div>
                        </div>
                        <p className='text-orange-500 text-2xl font-bold'>Hi, I'm</p>
                        <h1 className='text-4xl md:text-7xl font-semibold'>Kakan Chandra</h1>
                        <h3 className='text-orange-500 font-semibold text-3xl md:text-4xl'>
                            <Typewriter
                                words={['Junior Web Developer', 'Web Designer', 'Coder!']}
                                loop={0}
                                cursor
                                cursorStyle='<'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h3>
                    </div>
                    <p className='text-lg leading-6 mb-5 mx-5 md:mx-0'>Obviously I'm a Web Designer. Web Developer with over 1 years of experience. Experienced with MERN Stack Developer.</p>
                    <div className='flex md:block justify-center'>
                        <Button icon={<FaArrowDown />} ><Link to="https://drive.google.com/file/d/1dURc1ujLo9XHfaXAW5UkVmgxGDpAB8Di/view?usp=drive_link" target="_blank">Download Resume</Link></Button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className=" kakon_border_radius md:bg-[url('https://i.ibb.co/4pwY1cP/121.jpg')] bg-center bg-cover">
                    <div className='w-96 h-96 hidden md:block'> </div>
                </div>
                <div className='hidden md:block'>
                    <Social></Social>
                </div>
            </div>
        </>
    );
};

export default Banner;