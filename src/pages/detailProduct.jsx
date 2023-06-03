import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailProduct } from '../services/product.service';
import Button from '../components/Elements/Button/Button';

export const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        getDetailProduct(id, (data) => setProduct(data));
    }, [id]);
    // console.log(product);
    return (
        <div className='flex flex-col items-center w-full m-5'>
            {Object.keys(product).length > 0 && (
                <div className='flex p-6 font-mono max-w-xl'>
                    <div className='flex-none w-48 h-100 relative bg-fixed'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='absolute z-10 inset-0 w-full h-50 object-cover rounded-lg'
                            loading='lazy '
                        />
                    </div>
                    <form className='flex-auto pl-6'>
                        <div className='relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6'>
                            <h1 className='relative w-full flex-none mb-2 text-2xl font-semibold text-white'>{product.title}</h1>
                            <div className='relative text-lg text-white'>$ {product.price}</div>
                            <div className='relative uppercase text-red-400 ml-3'>
                                {product.rating.rate}/5 ({product.rating.count})
                            </div>
                        </div>
                        <div className='flex items-baseline my-6'>
                            <div className='space-x-3 flex text-sm font-medium'>
                                <label>
                                    <input className='sr-only peer' name='size' type='radio' value='xs' checked />
                                    <div className='relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400'>
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className='sr-only peer' name='size' type='radio' value='s' />
                                    <div className='relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400'>
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className='sr-only peer' name='size' type='radio' value='m' />
                                    <div className='relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400'>
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className='sr-only peer' name='size' type='radio' value='l' />
                                    <div className='relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400'>
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className='sr-only peer' name='size' type='radio' value='xl' />
                                    <div className='relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400'>
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='flex space-x-2 mb-4 text-sm font-medium'>
                            <div className='flex space-x-4'>
                                <button
                                    className='px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black'
                                    type='submit'
                                >
                                    Buy now
                                </button>
                                <button
                                    className='px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900'
                                    type='button'
                                >
                                    Add to bag
                                </button>
                            </div>
                            <button className='flex-none flex items-center justify-center w-12 h-12 text-black' type='button' aria-label='Like'>
                                <svg width='20' height='20' fill='currentColor' aria-hidden='true'></svg>
                            </button>
                        </div>
                        <p className='text-xs leading-6 text-slate-500'>Free shipping on all continental US orders.</p>
                    </form>
                </div>
            )}
            <button className='rounded-md mt-5  bg-red-600 h-10 px-6 text-white font-semibold min-w-full '>
            <Link to='/product'>Home</Link>
            </button>
        </div>
    );
};
