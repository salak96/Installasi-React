/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Button';

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
    const { children, title } = props;
    return (
        <div className='px-5 pb-5 h-40'>
            <a href='#'>
                <h5 className='text-white text-xl font-bold tracking-tight'>{title.substring(0, 20)}... </h5>
            </a>
            <p className='mt-2 text-slate-600'>{children.substring(0, 50)}...</p>
            <div className='mt-2 flex items-center'></div>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className='flex justify-between px-5 pb-5'>
            <a href='#'>
                <span className='text-xs font-bold text-white'>
                    {new Intl.NumberFormat('id-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)}
                </span>
            </a>
            <Button type='button' className=' bg-blue-600 text-white font-bold py-2 px-4 rounded-lg' onClick={() => handleAddToCart(id)}>
                Add Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
