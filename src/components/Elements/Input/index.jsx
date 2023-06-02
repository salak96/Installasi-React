/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Label from './Label';
import Input from './Input';
import { forwardRef } from 'react';
// eslint-disable-next-line react/display-name
const inputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className='mb-6 text-bold font-serif'>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    );
});
export default inputForm;
