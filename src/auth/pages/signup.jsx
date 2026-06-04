import { useState } from "react";
import { signup } from "../api/auth";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router";
import OAuthButton from "../components/OAuthButton";
import Divider from "../components/Divider";
import AuthErrorMessage from "../components/AuthErrorMessage";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Good to have for handling errors
  const [loading, setLoading] = useState(false); // Good for disabling buttons during submission

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setError("");
    setLoading(true);
    try {
      const data = await signup(name, email, password);
      console.log(data);
    } catch (error) {
      console.log(error.response);
      setError(error.response?.data?.message || "sign up failed. Try again.");
    } finally {
      setLoading(false);
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
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black placeholder:text-gray-400"
          />
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-gray-900 transition-colors"
          >
            {loading ? "Signing up..." : "Sign up"}
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
