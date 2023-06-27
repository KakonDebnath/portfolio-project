import SocialLink from "../SocialLink/SocialLink";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    const year = new Date().getUTCFullYear();
    return (
        <footer className=" bg-gray-700 text-white py-10 text-xl space-y-3">
            <div className="md:flex justify-around items-center px-10 md:px-0">
                <div className="mb-5 md:mb-0">
                    <h2 className="kakon_text_background text-4xl">Kakan Chandra</h2>
                    <h3 className="flex items-center gap-3"> <FaEnvelope className="" /> kakondebnath96@gmail.com</h3>
                    <address className="flex items-center gap-3"> <FaLocationDot />  Barisal, Bangladesh.</address>
                    <p className="flex items-center gap-3"><FaWhatsapp className="text-green-500" /> 01776558988</p>
                </div>
                <div className="mb-10">
                    <h3 className="kakon_text_background md:text-center mb-3 text-4xl">Follow Me</h3>
                    <div className="flex">
                        <SocialLink gap/>
                    </div>
                </div>
            </div>
            <p className="text-center capitalize">
                &copy; {year} All Right reserved by kakan Chandra
            </p>
        </footer>
    );
};

export default Footer;