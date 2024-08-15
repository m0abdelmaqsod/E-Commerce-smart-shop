import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/shared/navbar/navbar';
import Footer from '../components/shared/footer/footer';
import Home from './Home/Home';
import Products from './products/Products';
import NotFound from './notFound/NotFound';
import SinglePro from './single_product/SinglePro';
import Cart from './cart/Cart';
import Forget_pass from './logInPages/forget_password/Forget_pass';
import SignIn from './logInPages/signIn/SignIn';
import Create_account from './logInPages/create_account/Create_account';
import Access_code from './logInPages/access_code/Access_code';
import New_password from './logInPages/new_password/New_password';
import { ToastContainer } from 'react-toastify';



const Home_Router = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/SinglePro/:id' element={<SinglePro />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/SignIn' element={<SignIn />} />
                    <Route path='/Create_account' element={<Create_account />} />
                    <Route path='/Forget_pass' element={<Forget_pass />} />
                    <Route path='/Access_code' element={<Access_code />} />
                    <Route path='/New_password' element={<New_password />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
            <ToastContainer />
        </>
    )
}

export default Home_Router;