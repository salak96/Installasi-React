import { Link } from 'react-router-dom';
import Button from '../components/Elements/Button/Button';
import { useLogin } from '../hooks/useLogin';

export const ProfilePage = () => {
    const username = useLogin();
    return (
        <div className='flex flex-col items-center w-full m-5'>
            <img
                className='inline-block h-10 w-10 rounded-full ring-2 ring-red-600'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt={'username'}
            />
            <span className=' text-2xl font-medium text-red-600'>{username}</span>
            <Button className=' text-2xl font-medium text-blue-600'>
                <Link to='/login'>Login</Link>
            </Button>
        </div>
    );
};
