
import Button from '../Elements/Button/Button';
import Inputform from '../Elements/Input/index';
const FormLogin = () => {
    return(
        <form action=''>
        <Inputform label='Email' type='email' placeholder='exa@gmail.com' name='email ' />
        <Inputform label='Password' type='password' placeholder='*****' name='password ' />
        <Button classname='bg-blue-600 w-full'> Login</Button>
    </form>
    )
};

export default FormLogin;