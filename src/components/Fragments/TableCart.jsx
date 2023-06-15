/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    // eslint-disable-next-line no-unused-vars
    const [totalPrice, setTotalPrice] = useState(0);
    //fungsi menjumlahkan total price
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('totalPrice', sum);
        }
    }, [cart, products]);

    //ref
    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart]);

    return (
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
                        const product = products.find((products) => products.id === item.id);
                        return (
                            <tr key={item.id}>
                                <td className='border px-4 py-2'>
                                    {product.title.substring(0, 10)}...
                                </td>
                                <td className='border px-4 py-2'>
                                    {product.price}
                                </td>
                                <td className='border px-4 py-2'>
                                    {item.qty}
                                </td>
                                <td className='border px-4 py-2'>
                                    ${" "}
                                   {(item.qty * product.price).toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "USD",
                                   })}
                                </td>
                            </tr>
                        );
                    })}
                    <tr ref={totalPriceRef}>
                        <td colSpan={3} className='border px-4 py-2'>
                        <b>Total Price</b>
                        </td>
                    <td>
                        <b>
                            ${' '}
                            {totalPrice.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableCart;
