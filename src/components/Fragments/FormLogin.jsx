import { useEffect, useRef, useState } from 'react';
import Button from '../Elements/Button/Button';
import Inputform from '../Elements/Input/index';
import { Login } from '../../services/auth.service';
import UserLogin from '../user/UserLogin';
const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value);
        // localStorage.setItem('password', event.target.password.value);
        // window.location.href = '/product';
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        Login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res);
                window.location.href = '/product';
            } else {
                setLoginFailed(res.response.data);
            }
        });
    };
    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, []);
    return (
        <form onSubmit={handleLogin}>
            <Inputform label='Username' type='text' placeholder='Aliando' name='username' ref={usernameRef} />
            <Inputform label='Password' type='password' placeholder='*****' name='password' />
            <Button classname='bg-blue-600 w-full' type='submit'>{' '}
                Login
            </Button>
            {loginFailed && <p className='text-red-500 m-t-5 text-center'>
                {loginFailed}</p>}
            <UserLogin></UserLogin>
        </form>
    );
};

export default FormLogin;
