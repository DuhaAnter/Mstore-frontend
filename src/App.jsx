//import { Button } from "@/components/ui/button"
//import Login from "./pages/login";
import Login from "./auth/pages/login";

//import Signup from "./pages/signup";
import Signup from "./auth/pages/signup";

import ForgetPassword from "./pages/forgetPassword";
import Forgetpass from "./auth/pages/forgetpass";

function App() {
  return (
    <>
      {/* <h1>M-Store Frontend is Running</h1>
    <br />
    <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
    <br />
    <Button>shadcn is running</Button> */}
      {/* <Login/>
    <Signup/>
    <ForgetPassword/> */}
      <Login></Login>
      {/* <Signup></Signup>*/}
      {/* <Forgetpass></Forgetpass> */}
    </>
  );
}

export default App;
