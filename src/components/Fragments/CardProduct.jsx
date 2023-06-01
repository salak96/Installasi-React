/* eslint-disable react/prop-types */
import Button from '../Elements/Button/Button';

const CardProduct = (props) => {
    const { children } = props;
    return <div className='my-2 mx-2 w-full max-w-sm bg-gray-800 border border-slate-400 rouded-lg shadow'>{children}</div>;
};

const Header = (props) => {
    const { image } = props;
    return (
        <a href='#' className='block relative'>
            <img alt='product' src={image} className='p-8 rounded-t-lg' />
        </a>
    );
};

const Body = (props) => {
    const { children, title } = props;
    return (
        <div className='px-5 pb-5'>
            <a href='#'>
                <h5 className='text-white text-xl font-bold tracking-tight  '>{title}</h5>
            </a>
            <p className='mt-1 text-slate-600'>{children}</p>
            <div className='mt-2 flex items-center'></div>
        </div>
    );
};

const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className='flex justify-between px-5 pb-5'>
            <a href='#'>
                <span className='text-white text-xl font-bold tracking-tight '>
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)}
                </span>
            </a>
            <Button
                type='button'
                className='bg-blue-600  hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg'
                onClick={() => handleAddToCart(id)}
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
