
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Shared/Footer';
import NotFound from './Components/Shared/NotFound';



function App() {

   return (
      <div>
       
         <Navbar></Navbar>
         <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
           
            <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
         <ToastContainer />
         <Footer></Footer>

      </div>
   );
}

export default App;
