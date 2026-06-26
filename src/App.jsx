//import { Button } from "@/components/ui/button"
//import Login from "./pages/login";
//import Login from "./auth/pages/login";

//import Signup from "./pages/signup";
//import Signup from "./auth/pages/signup";

//import ForgetPassword from "./pages/forgetPassword";

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Header from "./Components/Header";
import Login from "./auth/pages/login";
import Forgetpass from "./auth/pages/forgetpass";
import Signup from "./auth/pages/signup";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Profile from "./pages/Profile";
import Products from "./products/pages/Products";
import ProductDetails from "./products/pages/ProductDetails";
import Cart from "./user/pages/Cart";
import Orders from "./user/pages/Orders";
import WithHeader from "./Components/WithHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WithHeader />}>
            <Route path="/" element={<Home></Home>} />
            <Route path="/products" element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/orders" element={<Orders />} />
            </Route>
          </Route>
          {/* without header */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgetpass />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>M-Store Frontend is Running</h1>
    <br />
    <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
    <br />
    <Button>shadcn is running</Button> */}
      {/* <Login/>
    <Signup/>
    <ForgetPassword/> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup>*/}
      {/* <Forgetpass></Forgetpass> */}
    </>
  );
}

export default App;
