/* eslint-disable react/prop-types */
import Button from '../Elements/Button/Button';

const CardProduct = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { children } = props;
    return <div className='mx-2 w-full max-w-sm bg-gray-800 border border-slate-400 rouded-lg shadow'>{children}</div>;
};

// eslint-disable-next-line no-unused-vars
const Header = (props) => {
    const { image } = props;
    return (
        <a href='#' className='block relative'>
            <img alt='product' src={image} className='p-8 rounded-t-lg' />
        </a>
    );
};

// eslint-disable-next-line no-unused-vars
const Body = (props) => {
    // eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const Footer = (props) => {
    const { price } = props;
    return (
        <div className='flex justify-between px-5 pb-5'>
            <a href='#'>
                <h5 className='text-white text-xl font-bold tracking-tight '>{[price]}</h5>
            </a>
            <Button type='button' className='bg-blue-600 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg'>
                Add to Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
