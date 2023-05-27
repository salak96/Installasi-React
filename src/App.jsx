import Button from './components/Button';

function App() {
    return (
        <div className='flex justify-center bg-yellow-600 min-h-0-screen items-center m-5'>
            <div className='flex gap-x-3 px-2'>
                <Button variant='bg-red-700' >Login</Button>
                <Button variant='bg-blue-700' >Log out</Button>
                <Button variant='bg-green-600'>Sign </Button>
                <Button>default</Button>
            </div>
        </div>
    );
}

export default App;
