/* eslint-disable no-undef */
import Label from './Label';
import Input from './Input';
const inputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className='mb-6 text-bold font-serif'>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    );
};

export default inputForm;
