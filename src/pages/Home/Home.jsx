import About from "../About/About";
import ContactForm from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Banner from "./Banner"

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <ContactForm />
        </>
    );
};

export default Home;