
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Auth/Login';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home/Home';
import MyPortfolio from './Components/Pages/MyPortfolio';
import Navbar from './Components/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='blogs' element={<Blogs></Blogs>}></Route>
       <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
