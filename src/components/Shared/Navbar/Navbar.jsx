import { Link } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
        <li><Link className="text-lg" to="/">Home</Link></li>
        <li><Link className="text-lg " to="/about">About</Link></li>
        <li><Link className="text-lg " to="/projects">Projects</Link></li>
        <li><Link className="text-lg " to="/projects">Contact Me</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-2xl font-bold">Kakan <span className="text-orange-500 text-5xl">.</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;