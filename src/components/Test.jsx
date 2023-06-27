import { Link, animateScroll as scroll } from 'react-scroll';

const Test = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass="active-link"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                {/* Add more links for other sections */}
            </ul>
        </nav>
    );
};

export default Test;