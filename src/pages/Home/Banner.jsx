import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Social from './Social';
const Banner = () => {
    return (
        <>
            <div className='flex gap-10 items-center py-10 mt-10 max-w-7xl mx-auto'>
                <div className='w-1/2'>
                    <div className='my-5 space-y-2'>
                        <p className='text-orange-500 text-2xl font-bold'>Hi, I'm</p>
                        <h1 className='text-7xl font-semibold'>Kakan Chandra</h1>
                        <h3 className='text-orange-500 font-semibold text-4xl'>
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
                    <p className='text-lg leading-6 mb-5'>Obviously I'm a Web Designer. Web Developer with over 1 years of experience. Experienced with MERN Stack Developer.</p>
                    <div>
                        <Link to="https://drive.google.com/file/d/1dURc1ujLo9XHfaXAW5UkVmgxGDpAB8Di/view?usp=drive_link" target="_blank">
                            <Button icon={<FaArrowDown/>} >Download Resume</Button>
                        </Link>
                    </div>
                </div>
                <div className=" kakon_border_radius bg-[url('https://i.ibb.co/4pwY1cP/121.jpg')] bg-center bg-cover">
                    <div className='w-96 h-96 '> </div>
                </div>
                <Social></Social>
            </div>
        </>
    );
};

export default Banner;