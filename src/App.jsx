import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";


function App() {
    return (
        <div className='flex justify-center bg-white min-h-0-screen items-center m-5 p-1'>
        <LoginPage/>
        <RegisterPage/>
        </div>
    );
}

export default App;
