// import { useAuth0 } from '@auth0/auth0-react';


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


  // const {user, loginWithRedirect, isAuthenticated, Logout} = useAuth0();
  // console.log("current user", user);


  return (
    <div className="App">


      {/* <div className='App-header'>

        { isAuthenticated && <h3>Hello {user.name} </h3> }

        { isAuthenticated ? (
        <button onClick={(e) => Logout()}> Log out </button>
        ) : (
          <button onClick={(e) => loginWithRedirect()} className="loginbtn" type="button">Login With Redirect</button>
        )
        }
      </div> */}



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
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
