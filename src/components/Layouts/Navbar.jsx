import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button/Button';

const Navbar = () => {
    const username = useLogin();
    //logout
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };
    return (
        <div className='flex justify-end bg-blue-600 h-20  text-red-50 items-center px-10'>
            <a className='text-white text-2xl' href='/profile'>
                {' '}
                {username}
            </a>
            <Button classname={'bg-red-600 ml-5'} onClick={handleLogOut}>
                Log out
            </Button>
        </div>
    );
};
export default Navbar;
