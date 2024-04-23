import './App.css';
import Nav from './components/nav';
import Footer from './components/footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Home from './components/Home';
import UserList from './components/Profile';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            {/* <Route path="/" element={< Home/>} /> */}
            <Route path="/product" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<ProductList />} />
            
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/profile" element={<UserList />} />

            
            <Route path="/search" element={<h1> Search Product  Components</h1>} />
            <Route path="/logout" element={<h1> Logout Product  Components</h1>} />
          </Route>
           
          <Route path="/" element={< Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
