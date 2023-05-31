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
        if(cart.find((item) => item.id === id)){
            const newCart = cart.map((item) => {
                if(item.id === id){
                    return {
                        ...item,
                        qty: item.qty + 1,
                    };
                }
                return item;
            });
            setCart(newCart);
        }else{
            setCart([...cart, {id,qty:1}]);
        }
        
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
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='flex m-5 flex-start text-3xl font-bold text-blue-600 '>Cart</h1>
                    <table className='text-left table-auto'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2'>Product</th>
                                <th className='px-4 py-2'>Price</th>
                                <th className='px-4 py-2'>Quantity</th>
                                <th className='px-4 py-2'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td className='border px-4 py-2'>{product.title}</td>
                                    <td className='border px-4 py-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}</td>
                                    <td className='border px-4 py-2'>{item.qty}</td>
                                    <td className='border px-4 py-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.qty * product.price)}</td>
                                </tr>
                            );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default product;
