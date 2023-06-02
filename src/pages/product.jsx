/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Button from '../components/Elements/Button/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { useState, useEffect, useRef } from 'react';
import { getProducts } from '../services/product.service';
import { getUsername } from '../services/auth.service';

//data products
const product = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState('');
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            setTotalPrice(products.reduce((acc, item) => acc + item.price * item.qty, 0));
        }
    }, [cart, products]);
    //token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUsername(getUsername(token));
        } else {
            window.location.href = '/login';
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };
    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };
    //useEffect
    useEffect(() => {
        getProducts((data) => setProducts(data));
    }, []);

    //useref
    const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 2 }];
        localStorage.setItem('cart', JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart, products]);

    return (
        <>
            <div className='flex justify-end bg-blue-600 h-20  text-red-50 items-center px-10'>
                {username}
                <Button classname={'bg-red-600 ml-5'} onClick={handleLogOut}>
                    Log out
                </Button>
            </div>

            <div className='flex justify-center py-2 mx-2'>
                <div className='w-3/4 flex flex-wrap m-2'>
                    {products.length > 0 &&
                        products.map((product) => (
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
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find((product) => product.id === item.id);
                                    return (
                                        <tr key={item.id}>
                                            <td className='border px-4 py-2'>{products.find((product) => product.id === item.id).title}</td>
                                            <td className='border px-4 py-2'>
                                                {new Intl.NumberFormat('AS-US', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                    minimumFractionDigits: 0,
                                                }).format(product.price)}
                                            </td>
                                            <td className='border px-4 py-2'>{item.qty}</td>
                                            <td className='border px-4 py-2'>
                                                {new Intl.NumberFormat('id-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                    minimumFractionDigits: 0,
                                                }).format(item.qty * product.price)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            <tr ref={totalPriceRef}>
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
