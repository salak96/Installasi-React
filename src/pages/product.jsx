/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Button from '../components/Elements/Button/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { useState } from 'react';
const products = [
    {
        id: 1,
        title: 'Sepatu Baru',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: '500000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 2,
        title: 'Sepatu Baru 2',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: '250100',
        image: '/images/sepatu.jpg',
    },
    {
        id: 3,
        title: 'Sepatu Baru 3',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: '1503000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 4,
        title: 'Sepatu Baru 4',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: '140000',
        image: '/images/sepatu.jpg',
    },
];
const email = localStorage.getItem('email');

const password = localStorage.getItem('password');

const product = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);
    const handleLogOut = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };
    const handleAddToCart = (id) => {
       setCart([...cart, 
        {
           id: 1,
           qty: 1,
        },
    ]);
    };
    return (
        <>
            <div className='flex justify-end bg-blue-600 h-20  text-red-50 items-center px-10'>
                {email}
                <Button classname={'bg-red-600 ml-5'} onClick={handleLogOut}>
                    Log out
                </Button>
            </div>

            <div className='flex justify-center py-2 mx-2'>
                <div className='w-3/4 flex flex-wrap m-2'>
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} addtoCard={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className='w-1/4'>
                    <h1 className='text-3xl font-bold text-blac'>Cart </h1>
                    <ul className='list-disc'>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {' '}
                                {item.name} x {item.price}
                            </li>
                        ))}
                    </ul>
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Product</th>
                                <th className='px-4 py-2'>Qty</th>
                                <th className='px-4 py-2'>Price</th>
                                <th className='px-4 py-2'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className='border px-4 py-2'>{item.name}</td>
                                    <td className='border px-4 py-2'>{item.qty}</td>
                                    <td className='border px-4 py-2'>{item.price}</td>
                                    <td className='border px-4 py-2'>{item.qty * item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default product;
