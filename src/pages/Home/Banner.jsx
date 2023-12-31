import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Social from './Social';
import SocialLink from '../../components/Shared/SocialLink/SocialLink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Banner = () => {
    return (
        <>
            <div id='home' className='md:flex gap-10 items-center py-5 md:py-10 md:mt-10 container mx-auto relative'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='md:w-1/2 text-center md:text-left'>
                    <div className='my-5 space-y-2'>
                        <div className=' relative md:hidden border-2 border-orange-500 rounded-xl w-1/2 mx-auto'>
                            <LazyLoadImage
                                alt={"kakan Chandra"}
                                effect="blur"
                                src={"https://i.ibb.co/QHdQjWm/IMG20230626183352.png"} />
                            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                                <SocialLink />
                            </div>
                        </div>
                        <p className='text-orange-500 text-2xl font-bold'>Hi, I'm</p>
                        <h2 className='text-4xl md:text-7xl font-semibold'>Kakan Chandra</h2>
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
                <div data-aos="zoom-in-up" data-aos-duration="1200" className=" kakon_border_radius md:bg-[url('https://i.ibb.co/4pwY1cP/121.jpg')] bg-center bg-cover">
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