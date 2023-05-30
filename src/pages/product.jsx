import Button from '../components/Elements/Button/Button';
import CardProduct from '../components/Fragments/CardProduct';
const products = [
    {
        id: 1,
        title: 'Sepatu Baru',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: 'Rp.4.500.000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 2,
        title: 'Sepatu Baru 2',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: 'Rp550.000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 3,
        title: 'Sepatu Baru 3',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: 'Rp 1.500.000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 4,
        title: 'Sepatu Baru 4',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: 'Rp 1.500.000',
        image: '/images/sepatu.jpg',
    },
    {
        id: 5,
        title: 'Sepatu Baru 5',
        description: 'Sepatu baru dengan kualitas terbaik',
        price: 'Rp 1.500.000',
        image: '/images/sepatu.jpg',
    },

]
const email = localStorage.getItem('email');
// eslint-disable-next-line no-unused-vars
const password = localStorage.getItem('password');

const product = () => {
    const handleLogOut = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    }
    return (
        <>
        <div className='flex justify-end bg-blue-600 h-20  text-red-50 items-center px-10'>
           {email}
           <Button  classname={'bg-red-600 ml-5'} onClick={handleLogOut} >Log out</Button>
           </div>

        <div className='flex justify-center py-2 mx-2'>
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
      
    </div>
    </>
    );
};




export default product;
