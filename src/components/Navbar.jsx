import {NavLink} from "react-router-dom";
import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {useDispatch,} from "react-redux";
import {toggleTheme} from "../store/slices/userSlice.js";
import {FaBarsStaggered} from "react-icons/fa6";
import {NavLinks} from "./index.js";

const Navbar = () => {
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(toggleTheme());
    };
    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    <NavLink
                        to='/'
                        className='hidden lg:flex btn btn-primary text-3xl items-center'
                    >
                        C
                    </NavLink>
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='h-6 w-6'/>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks/>
                        </ul>
                    </div>
                </div>

                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal'>
                        <NavLinks/>
                    </ul>
                </div>

                <div className='navbar-end'>
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme}/>
                        {/* sun icon*/}
                        <BsSunFill className='swap-on h-4 w-4'/>
                        {/* moon icon*/}
                        <BsMoonFill className='swap-off h-4 w-4'/>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
