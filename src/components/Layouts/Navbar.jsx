import { useEffect, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button/Button';
import { useSelector } from 'react-redux';
import keranjang from '../../assets/keranjang.png';
const Navbar = () => {
    const username = useLogin();
    const [totalCart,setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
           return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <div className='flex justify-end bg-blue-600 h-20  text-red-50 items-center px-10'>
            <a className='text-white text-2xl' href='/profile'>
                {username}
            </a>
            <Button classname={'bg-red-600 ml-5 p-2 rounded-md'} onClick={handleLogOut}>
                Log out
            </Button>  
            <div className='text-slate-700 text-2xl flex items-center bg-orange-600 ml-5 p-2 rounded-md '>
                <img src={keranjang} alt='keranjang' className='w-8 h-8'  />
                <p className='ml-2'>{totalCart}</p>
            </div>
        </div>
    );
};
export default Navbar;
