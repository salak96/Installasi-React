import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormRegister';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
    return (
        <AuthLayouts title='Register'>
            <FormLogin />
            <p className='text-sm mt-4'>
               have an account ?{' '}
                <Link to='/Login' className='font-bold text-blue-600'>
                   Login
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;
