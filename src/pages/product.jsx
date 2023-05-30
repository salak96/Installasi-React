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

]
const product = () => {
    return (
        <div className='flex justify-center py-5'>
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    );
};

export default product;
