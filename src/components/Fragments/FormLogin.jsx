import Button from '../Elements/Button/Button';
import Inputform from '../Elements/Input/index';
const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/product';
        
    };
    return (
        <form onSubmit={handleLogin}>
            <Inputform 
            label='Email' 
            type='email' 
            placeholder='exa@gmail.com' 
            name='email' />
            <Inputform 
            label='Password' 
            type='password' 
            placeholder='*****' 
            name='password' />
            <Button classname='bg-blue-600 w-full' type='submit'> Login</Button>
        </form>
    );
};

export default FormLogin;
