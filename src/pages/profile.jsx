import { Link } from 'react-router-dom';
import Button from '../components/Elements/Button/Button';
import { useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useSelector, useDispatch } from 'react-redux';
import { setListUser } from '../redux/slices/userSlice';

export const ProfilePage = () => {
    const userNama = useLogin();
    const dispatch = useDispatch();
    const listUser = useSelector((state) => state.user.data.listUser);
    useEffect(() => {
        fetch('https://fakestoreapi.com/users/')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setListUser(data));
            });
    }, []);

    return (
        <div className='flex flex-col items-center w-full m-5'>
            <img
                className='inline-block h-50 w-50 rounded-full ring-2 ring-red-600'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt={userNama}
                width={256}
                height={256}
                loading='lazy'
            />
            <div className='flex flex-row-reverse justify-center m-10'>
                <span className='font-bold text-4xl text-gray-800 text-center'>{userNama}</span>
            </div>
            <table className='text-left table-auto'>
                <thead>
                    <tr>
                        <th className='px-4 py-2'>Address</th>
                        <th className='px-4 py-2'>City</th>
                        <th className='px-4 py-2'>ZipCode</th>
                        <th className='px-4 py-2'>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser.map((user) => {
                        if (userNama === user.address.street && userNama === user.city && userNama === user.zipcode && userNama === user.phone) {
                            return (
                                <tr key={user.id}>
                                    <td className='border px-4 py-2'>{user.address.street}</td>
                                    <td className='border px-4 py-2'>{user.address.city}</td>
                                    <td className='border px-4 py-2'>{user.address.zipcode}</td>
                                    <td className='border px-4 py-2'>{user.phone}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
            <div className='flex flex-row-reverse justify-center m-5 p-5'>
                <div className='flex flex-row-reverse justify-center align-center max-w-screen-xl'>
                    <Button className='text-2xl font-medium text-red-600 m-5 p-5 px-10 mx-5'>
                        <Link to='/login'>Log out</Link>
                    </Button>
                    <button className='px-10 mx-5 bg-black hover:bg-blue-700 text-white font-bold py-2 rounded'>
                        <Link to='/product'>product</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
