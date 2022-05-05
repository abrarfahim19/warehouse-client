import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Manage from './Components/Manage/Manage';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage' element={
        <RequireAuth>
          <Manage></Manage>
        </RequireAuth>}>
        </Route>
        <Route path='/inventory/:Id' element={
          <RequireAuth>
            <ProductDetails></ProductDetails>
          </RequireAuth>}>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
