import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../store/slices/userSlice.js";


const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userState.user)

    const handleLogout = () => {
        navigate('/schedule');
        dispatch(logoutUser());
    };

    return (
        <header className='bg-neutral py-2 text-neutral-content'>
            <div className='align-element flex justify-center sm:justify-end'>
                {user?.role !== 'guest' ? <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                    <p className='text-xs sm:text-sm'>Hello, {user.displayName}</p>
                    <button
                        className='btn btn-xs btn-outline btn-primary'
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </div> : <div className='flex gap-x-6 justify-center items-center'>
                    <Link to='/login' className='link link-hover text-xs sm:text-sm'>
                        For staff only!
                    </Link>
                </div>}

            </div>

        </header>
    );
};

export default Header;
