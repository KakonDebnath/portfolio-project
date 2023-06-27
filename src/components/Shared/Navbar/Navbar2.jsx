import { NavLink } from 'react-router-dom';
import { PiDotFill } from 'react-icons/pi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar2 = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const routes = [
        { id: 1, name: 'home', path: "/" },
        { id: 2, name: 'about', path: "/about" },
        { id: 3, name: 'skills', path: "/skills" },
        { id: 4, name: 'projects', path: "/projects" },
        { id: 5, name: 'contact', path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`p-4 flex flex-wrap justify-between md:flex-row transition-all duration-300 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 right-0 shadow-xl bg-base-200' : ''}`}>
            <div className="flex items-center justify-end">
                {/* Left Logo Section */}
                <NavLink to="/" className="normal-case text-4xl font-bold flex relative">
                    Kakan <PiDotFill className="text-orange-500 absolute text-base -bottom-1 -right-6" size={30} />
                </NavLink>
            </div>
            <ul className={`hidden md:flex gap-8 text-lg`}>
            {/* Right Navigation Section */}
                {routes.map(route => (
                    <p key={route.id}>
                        <Link
                        className='kakon_active_link'
                        activeClass="active-link"
                        to={route.name}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {route.name}
                    </Link>
                    </p>
                ))}
            </ul>
            {/* Mobile Menu Toggle */}
            <div className='flex md:hidden'>
                <button onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? <CgClose size={30} /> : <HiMenuAlt3 size={30} />
                    }
                </button>
            </div>
            {
                isMobileMenuOpen && <>
                {routes.map(route => (
                    <p 
                        className='w-full mb-2'
                        key={route.id}>
                        <NavLink
                        to={route.path}
                        className={({ isActive }) => (isActive ? "text-orange-500 font-bold capitalize" : "capitalize")}
                    >
                        {route.name}
                    </NavLink>
                    </p>
                ))}
                </>
            }
        </nav>
    );
};

export default Navbar2;
