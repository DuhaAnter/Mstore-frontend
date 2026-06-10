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


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpass" element={<Forgetpass />} />
          <Route path="/products" element={<Products/>}/>
          <Route element={<ProtectedRoutes/>}>
              <Route path='/profile' element={<Profile/>}/>
          </Route>
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
