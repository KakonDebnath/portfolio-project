import { FaEye } from "react-icons/fa";
import Button from "../../components/Button/Button";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto bg-orange-50">
            <SectionTitle>About Me</SectionTitle>
            <div className="md:flex justify-around items-center pb-20">
                <div>
                    <div className="border-2 border-orange-500 w-72 h-80 rounded-xl transform rotate-45">
                        <img className="transform -rotate-45 hover:transform hover:scale-150 transition-all duration-300" src="https://i.ibb.co/17XG1x1/IMG20230626183418.png" alt="" />
                    </div>
                </div>
                <div className="w-1/2 space-y-3">
                    <h3 className="text-3xl">I'm a Passionate Web Designer</h3>
                    <p className="text-lg">Obviously I'm a Web Designer. Web Developer with over 1 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <br />
                    <p className="text-lg">I'm a professional web designer. My motive is to build a best web design with my all years of experience.</p>
                    <Button icon={<FaEye />}>See Projects </Button>
                </div>
            </div>
        </div>
    );
};

export default About;