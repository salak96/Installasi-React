import CardProduct from '../components/Fragments/CardProduct';

const product = () => {
    return (
        <div className='flex justify-center py-5'>
            <CardProduct>
                <CardProduct.Header image={'/images/sepatu.jpg'} />
                <CardProduct.Body title='Sepatu Baru'>Sepatu baru dengan kualitas terbaik</CardProduct.Body>

                <CardProduct.Footer price='Rp.4.500.000' />
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image={'/images/sepatu2.jpeg'} />
                <CardProduct.Body title='Sepatu Baru'>Sepatu nike </CardProduct.Body>

                <CardProduct.Footer price='Rp.4.500.000' />
            </CardProduct>
        </div>
    );
};

export default product;
