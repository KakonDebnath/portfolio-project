import { NavLink } from 'react-router-dom';
import { PiDotFill } from 'react-icons/pi';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const routes = [
    { id: 1, name: 'Home', path: "/" },
    { id: 2, name: 'About', path: "/about" },
    { id: 3, name: 'Skills', path: "/skills" },
    { id: 4, name: 'Projects', path: "/projects" },
    { id: 5, name: 'Contact', path: "/contact" },
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

  return (
    <nav className={`p-4 flex flex-wrap justify-between md:flex-row transition-all duration-300 z-50 ${isNavbarFixed ? 'fixed top-0 left-0 right-0 shadow-xl bg-base-200' : ''}`}>
      <div className="flex items-center">
        {/* Left Logo Section */}
        <NavLink to="/" className="normal-case text-4xl font-bold flex relative" >
          Kakan <PiDotFill className="text-orange-500 absolute text-base -bottom-1 -right-6" size={30} />
        </NavLink>
      </div>
      <div className="flex items-center gap-5 text-lg">
        {/* Right Navigation Section */}
        {routes.map(route => (
          <NavLink
            key={route.id}
            to={route.path}
            className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "")}
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
