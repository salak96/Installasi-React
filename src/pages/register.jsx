import AuthLayouts from '../components/Layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormRegister';

const RegisterPage = () => {
    return (
        <AuthLayouts title='Register' type='register'>
            <FormLogin />
        </AuthLayouts>
    );
};

export default RegisterPage;
