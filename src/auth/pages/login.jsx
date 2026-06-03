
import { useState } from "react";
import {login} from "../api/auth";
import { Link } from "react-router";
import Forgetpass from "./forgetpass";

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
      alert("Login Successful!");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md  shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center">
          <p className="font-semibold text-6xl mb-5 font-['Pinyon_Script']">
            Fashions
          </p>

          {error && <p style={{ color: "red" }}>{error}</p>}

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
              <Link to="/forgetpass" className="text-sm text-gray-400 hover:text-black">
                Forgot password?
              </Link>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
            >
             {loading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex items-center gap-4 px-8">
              <div className="flex-1 h-px bg-black"></div>
              <span className=" text-sm">or</span>
              <div className="flex-1 h-px bg-black"></div>
            </div>
            <button className="w-full border border-black-200 rounded-xl py-3 flex items-center justify-center gap-3  cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Log in with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
