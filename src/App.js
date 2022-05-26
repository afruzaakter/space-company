
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Login from './Components/Pages/Auth/Login';
import Blogs from './Components/Pages/Blogs';
import Home from './Components/Pages/Home/Home';
import MyPortfolio from './Components/Pages/MyPortfolio';
import Navbar from './Components/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/Pages/Auth/SignUp';
import Reset from './Components/Pages/Auth/Reset';
import Footer from './Components/Shared/Footer';
import NotFound from './Components/Shared/NotFound';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './Components/Pages/Auth/RequireAuth';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyOrders from './Components/Pages/Dashboard/MyOrders';
import AddReviews from './Components/Pages/Dashboard/AddReviews';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import ProductDetails from './Components/Pages/Purchase/ProductDetails';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin';

function App() {
  
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='blogs' element={<Blogs></Blogs>}></Route>
       <Route path='myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='signup' element={<SignUp></SignUp>}></Route>
       <Route path='reset' element={<Reset></Reset>}></Route>

       <Route path='/purchase/:id' element={
       <RequireAuth>
          <Purchase></Purchase>
       </RequireAuth>

       }></Route>
       <Route path='/productdetails/:id' element={
       <RequireAuth>
          <ProductDetails></ProductDetails>
       </RequireAuth>

       }></Route>
       {/* //dashboard route  start */}
       <Route path='/dashboard' element={
       <RequireAuth>
          <Dashboard></Dashboard>
       </RequireAuth>

       }>
          
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreviews' element={<AddReviews></AddReviews>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>

       </Route>

      {/* //dashboard route  start */}       

       <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <ToastContainer />
    <Footer></Footer>
    
    </div>
  );
}

export default App;
