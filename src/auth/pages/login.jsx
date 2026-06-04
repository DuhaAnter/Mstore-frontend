import { useState } from "react";
import { login } from "../api/auth";
import { Link } from "react-router";

import AuthLayout from "../components/AuthLayout";
import OAuthButton from "../components/OAuthButton";
import Divider from "../components/Divider";
import AuthErrorMessage from "../components/AuthErrorMessage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Good to have for handling errors
  const [loading, setLoading] = useState(false); // Good for disabling buttons during submission

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setError("");
    setLoading(true);
    try {
      const data = await login(email, password);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleOAuth =()=>{
    console.log("calling google api .....")
  };

  return (
    <>
      <AuthLayout>
       <AuthErrorMessage message={error}/>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            class="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black  placeholder:text-gra"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black  placeholder:text-gra"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="text-right">
            <Link
              to="/forgetpass"
              className="text-sm text-gray-400 hover:text-black"
            >
              Forgot password?
            </Link>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <Divider/>
          {/* Log in with Google */}
          <OAuthButton title ="Log in with Google" handleOAuth={handleOAuth}></OAuthButton>
          <Link to="/signup">
            <p className="text-center text-sm text-gray-600">
              New here?
              <span className="pl-1 font-medium text-black hover:underline">
                {" "}
                Create Account
              </span>
            </p>
          </Link>
        </form>
      </AuthLayout>
    </>
  );
}
