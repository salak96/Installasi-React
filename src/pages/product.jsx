/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Button from '../components/Elements/Button/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { useState, useEffect, useRef } from 'react';
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

const product = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);
    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + item.qty * item.price;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const handleLogOut = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };
    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

      //useref
      const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
      const handleAddToCartRef = (id) => {
          cartRef.current = [...cartRef.current,{id,qty: 2,}];
          localStorage.setItem('cart', JSON.stringify(cartRef.current));
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
                                        <td className='border px-4 py-2'>
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(
                                                product.price
                                            )}
                                        </td>
                                        <td className='border px-4 py-2'>{item.qty}</td>
                                        <td className='border px-4 py-2'>
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(
                                                item.qty * product.price
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td className='border px-4 py-2' colSpan='3'>
                                    <b>Total Price</b>
                                </td>
                                <td className='border px-4 py-2'>
                                    <b>
                                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(
                                            cart.reduce((totalPrice, item) => {
                                                const product = products.find((product) => product.id === item.id);
                                                return totalPrice + item.qty * product.price;
                                            }, 0)
                                        )}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default product;
