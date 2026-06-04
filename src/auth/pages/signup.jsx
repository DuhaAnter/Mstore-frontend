import { useState } from "react";
import { signup } from "../api/auth";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router";
import OAuthButton from "../components/OAuthButton";
import Divider from "../components/Divider";
import AuthErrorMessage from "../components/AuthErrorMessage";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../utils/authValidation"; 

export default function Signup() {
  const [error, setError] = useState(""); // Kept for backend API errors

  const {
    register,
    handleSubmit: handleRHFSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onFormSubmit = async (data) => {
    setError("");
    // data contains: { name, email, password, confirmPassword }
    try {
      const responseData = await signup(data.name, data.email, data.password);
      console.log(responseData);
    } catch (error) {
      console.log(error.response);
      setError(error.response?.data?.message || "sign up failed. Try again.");
    }
  };
  const handleOAuth = () => {
    console.log("calling google api .....");
  };

  return (
    <>
      <AuthLayout>
        <AuthErrorMessage message={error} />
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-gray-600">Create your account</p>
        </div>
        <form className="space-y-4 w-full" onSubmit={handleRHFSubmit(onFormSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
              {...register("name")} // RHF Register
            />
            {errors.name && (
              <span className="text-xs text-red-500 px-4 mt-1 block">{errors.name.message}</span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
              {...register("email")} // RHF Register
            />
            {errors.email && (
              <span className="text-xs text-red-500 px-4 mt-1 block">{errors.email.message}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
              {...register("password")} // RHF Register
            />
            {errors.password && (
              <span className="text-xs text-red-500 px-4 mt-1 block">{errors.password.message}</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
              {...register("confirmPassword")} // RHF Register
            />
            {errors.confirmPassword && (
              <span className="text-xs text-red-500 px-4 mt-1 block">{errors.confirmPassword.message}</span>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Signing up..." : "Sign up"}
          </button>
          
          <Divider />
          <OAuthButton
            title="Sign up with Google"
            handleOAuth={handleOAuth}
          ></OAuthButton>
          <Link to="/login">
            <p className="text-center text-sm pt-2 text-gray-600">
              Already have an account?
              <span className="pl-1 font-medium text-black hover:underline">
                Log In
              </span>
            </p>
          </Link>
        </form>
      </AuthLayout>
    </>
  );
}