import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import ProgressBar from 'react-animated-progress-bar';
import { FaCss3, FaGithub, FaHtml5, FaReact, FaRegFileWord } from "react-icons/fa"
import { SiTailwindcss, SiBootstrap, SiMongodb, SiJavascript, SiExpress, SiJsonwebtokens, SiFirebase, SiNetlify } from "react-icons/si"



const Skills = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className="">
            <SectionTitle>My Skills</SectionTitle>
            
            <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 place-items-center gap-5 ">
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="90" />
                        <div className="flex justify-center">
                            <FaHtml5 size={50} className="text-red-500"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">HTML5</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="80" />
                        <div className="flex justify-center">
                            <FaCss3 size={50} className="text-sky-500"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">CSS3</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <SiTailwindcss size={50} className="text-blue-500"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">TailwindCss</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <SiBootstrap size={50} className="text-purple-600"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">BootStrap</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <FaReact size={50} className="text-sky-600"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">React Js</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <SiMongodb size={50} className="text-green-600"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">MongoDB</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="60" />
                        <div className="flex justify-center">
                            <SiJavascript size={50} className="text-yellow-500"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">javaScript</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="60" />
                        <div className="flex justify-center">
                            <SiExpress size={50} className="text-black"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">Express Js</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="60" />
                        <div className="flex justify-center">
                            <SiJsonwebtokens size={50} className="text-red-500"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">JWT</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <SiFirebase size={50} className="text-yellow-400"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">Firebase</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <SiNetlify size={50} className="text-black"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">Netlify</h2>
                    </div>
                    <div className="hover:shadow-2xl transition-all duration-300 p-5 rounded-lg space-y-3">
                        <ProgressBar width="230" trackWidth="20" percentage="70" />
                        <div className="flex justify-center">
                            <FaGithub size={50} className="text-black"/>
                        </div>
                        <h2 className="text-center font-bold text-2xl">Github</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;