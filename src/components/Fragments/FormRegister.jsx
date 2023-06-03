import Button from '../Elements/Button/Button';
import Inputform from '../Elements/Input/index';
import UserLogin from '../user/UserLogin';
const FormRegister = () => {
    return (
        <form action=''>
            <Inputform label='Fullname' type='type' placeholder='insert name' name='fullname' />
            <Inputform label='Password' type='password' placeholder='*****' name='Password ' />
            <Inputform label='Confirm Password' type='password' placeholder='*****' name='Confirm Password' />
            <Button classname='bg-blue-600 w-full'> Register</Button>
            <UserLogin></UserLogin>
        </form>
    );
};

export default FormRegister;
