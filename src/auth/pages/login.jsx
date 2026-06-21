import { useState } from "react";
import { login } from "../api/auth";
import { Link } from "react-router";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/authValidation";

import AuthLayout from "../components/AuthLayout";
import OAuthButton from "../components/OAuthButton";
import Divider from "../components/Divider";
import AuthErrorMessage from "../components/AuthErrorMessage";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "@/store/sliceses/userSlice";
import { setCartNumber } from "@/store/sliceses/cartSlice";

export default function Login() {
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();
  //redux
  const user = useSelector((state) => state.user);
  //console.log("user data from redux store", user);
  const dispatch = useDispatch();
  const cart=useSelector(state=>state.cart);
  console.log(cart)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // 2. This function only runs if Zod passes all validation checks
  const onFormSubmit = async (data) => {
    setBackendError(""); // Clear old errors
    // 'data' is an object containing { email: "...", password: "..." }
    //console.log("Valid Form Data from zod:", data);

    try {
      //Axios login API call goes here using data.email and data.password
      const responseData = await login(data.email, data.password);
      console.log("Login Success:", responseData);
      if (responseData.message === "success u r logged in") {
        // store the user date in redux
        const logged = true;
        const userObj = { logged, ...responseData.data };
        dispatch(setUserInfo(userObj));

        
        console.log("cart item", responseData.data.cart.items);
        const totalQuantity = responseData.data.cart?.items?.reduce(
  (sum, item) => sum + item.quantity,
  0
) || 0;

dispatch(setCartNumber(totalQuantity));

console.log("computed total:", totalQuantity);

navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      // Handle backend error states here
      setBackendError(
        error.response?.data?.message || "Login failed. Try again.",
      );
    }
  };

  const handleOAuth = () => {
    console.log("calling google api .....");
  };

  return (
    <>
      <AuthLayout>
        <AuthErrorMessage message={backendError} />
        <form
          className="space-y-4 w-full"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div>
            <input
              type="email"
              {...register("email")} // Registers the input field into RHF
              placeholder="Email Address"
              className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black "
            />
            {errors.email && (
              <span className="text-xs text-red-500 px-4">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black "
            />
            {errors.password && (
              <span className="text-xs text-red-500 px-4">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="text-right">
            <Link
              to="/forgetpass"
              className="text-sm text-gray-400 hover:text-black"
            >
              Forgot password?
            </Link>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          <Divider />
          {/* Log in with Google */}
          <OAuthButton
            title="Log in with Google"
            handleOAuth={handleOAuth}
          ></OAuthButton>
          <Link to="/signup">
            <p className="text-center text-sm text-gray-600">
              New here?
              <span className="pl-1 font-medium text-black hover:underline">
                Create Account
              </span>
            </p>
          </Link>
        </form>
      </AuthLayout>
    </>
  );
}
