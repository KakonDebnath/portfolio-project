import { FaEye } from "react-icons/fa";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div id="about" data-aos="fade-up" data-aos-duration="1500" className="container mx-auto bg-orange-50">
            <SectionTitle>About Me</SectionTitle>
            <div className="md:flex justify-around items-center pb-20">
                <>
                    <div className="mx-auto border-2 border-orange-500 w-60 md:w-72 md:h-80 rounded-xl transform md:rotate-45 md:mx-0">
                        <LazyLoadImage
                            className="transform md:-rotate-45 hover:transform hover:scale-150 transition-all duration-300"
                            alt={"kakan Chandra"}
                            effect="blur"
                            src={"https://i.ibb.co/17XG1x1/IMG20230626183418.png"} />
                    </div>
                </>
                <div className="md:w-1/2 space-y-3 mx-5 md:mx-0">
                    <h3 className="text-3xl mt-5 md:mt-0">I'm a Passionate Web Designer</h3>
                    <p className="text-lg">Obviously I'm a Web Designer. Web Developer with over 1 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <br />
                    <p className="text-lg">I'm a professional web designer. My motive is to build a best web design with my all years of experience.</p>
                    <div className='flex md:block justify-center'>
                        <Link to="/projects"><Button icon={<FaEye />} >See Projects</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;