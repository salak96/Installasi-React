
import Button from '../Elements/Button/Button';
import Inputform from '../Elements/Input/index';
const FormRegister = () => {
    return(
        <form action=''>
        <Inputform label='fullname' type='type' placeholder='insert name' name='fullname' />
        <Inputform label='Password' type='password' placeholder='*****' name='confirmPassword ' />
        <Button classname='bg-blue-600 w-full'> Register</Button>
    </form>
    )
};

export default FormRegister;