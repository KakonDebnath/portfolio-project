import { Typewriter } from 'react-simple-typewriter'
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
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
                        <Link to="https://drive.google.com/file/d/1dURc1ujLo9XHfaXAW5UkVmgxGDpAB8Di/view?usp=drive_link" target="_blank"><button className='btn btn-outline btn-warning'> Download Resume <FaArrowDown /></button></Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='relative left-4'>
                        <img className='w-96' src="https://i.ibb.co/KsQDFMJ/01748902839-main.png" alt="Kakan Photo" />
                        <div className='absolute bg-orange-200 rotate-45 w-80 h-96 left-16  rounded-full -z-10 top-10'></div>
                        <div className='absolute bg-orange-100 rotate-45 w-72 h-96 left-36  rounded-full -z-20 top-20'></div>
                        <div className='absolute bg-orange-50 rotate-45 w-72 h-96 left-52 rounded-full -z-30 top-10'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;