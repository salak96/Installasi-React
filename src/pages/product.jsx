/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import Button from '../components/Elements/Button/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';

//data products
const product = () => {
    const [products, setProducts] = useState([]);
    useLogin(); //hooks useLogin username
    //useEffect
    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className='flex justify-center py-2 mx-2'>
                <div className='w-3/4 flex flex-wrap m-2'>
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header image={product.image} id={product.id} />
                                <CardProduct.Body  judul={product.title} />
                                <CardProduct.Footer price={product.price} id={product.id} />
                            </CardProduct>
                        ))}
                </div>
                <div className='w-2/6'>
                    <h1 className='flex m-5 flex-start text-3xl font-bold text-blue-600 '>Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    );
};

export default product;
