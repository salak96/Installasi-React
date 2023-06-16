/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
const CardProduct = (props) => {
    const { children } = props;
    return <div className='my-2 mx-2 w-full max-w-sm bg-gray-800 border border-slate-400 rouded-lg shadow'>{children}</div>;
};

const Header = (props) => {
    const { image, id } = props;
    return (
        <Link to={`/product/${id}`} className='block relative'>
            <img alt='product' src={image} className='p-8 rounded-t-lg w-full h-60  bg-repeat' />
        </Link>
    );
};

const Body = (props) => {
    const { judul, description } = props;
    return (
        <div className='px-5 pb-5 h-40'>
            <a href='#'>
                <h5 className='text-white text-xl font-bold tracking-tight'>{judul?.substring(0, 60)} </h5>
            </a>
            <p className='mt-1 text-slate-600'>{description?.substring(0, 100)}...</p>
            <div className='mt-2 flex items-center'></div>
        </div>
    );
};

const Footer = (props) => {
    const { price, id } = props;
    const dispach = useDispatch();
    return (
        <div className='flex justify-between px-5 pb-5'>
            <a href='#'>
                <span className='text-white text-xl font-bold tracking-tight '>
                    {new Intl.NumberFormat('id-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}
                </span>
            </a>
            <Button
                type='button'
                className='bg-blue-600  hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg'
                onClick={() => dispach(addToCart({ id, qty: 1 }))}
            >
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
