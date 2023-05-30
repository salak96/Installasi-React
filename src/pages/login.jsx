import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return ( 
        <AuthLayouts title='Login'>
            <FormLogin />
            <p className='text-sm mt-4'>
                Dont have an account ?{' '}
                <Link to='/register' className='font-bold text-blue-600'>
                    Register
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;
