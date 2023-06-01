import shoeImage from '/images/sepatu.jpg';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <div className='bg-gray-200 flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold mb-4'>Selamat Datang di Toko Sepatu</h1>
            <img src={shoeImage} alt='Sepatu' className='max-w-lg rounded-lg shadow-md mb-4' />
            <p className='text-lg text-gray-800'>Temukan koleksi sepatu terbaru kami.</p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4'>
                Lihat Koleksi Kami
                <Link to='/login' className='font-bold text-red-600 hover:text-white'>
                    {' '}
                    Login
                </Link>
            </button>
        </div>
    );
};

export default HomePage;
