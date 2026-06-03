import { useState } from "react";
import { signup } from "../api/auth";

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
      alert("sign up Successful!");
    } catch (error) {
      console.log(error.response);
      setError(error.response?.data?.message || "sign up failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="max-w-md shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center bg-white">
          <p className="font-semibold text-6xl mb-3 font-['Pinyon_Script']">
            Fashions
          </p>

          {error && <p style={{ color: "red" }}>{error}</p>}

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
              Sign up
            </button>

            <div className="flex items-center gap-4 px-8">
              <div className="flex-1 h-px bg-black"></div>
              <span className=" text-sm">or</span>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            <button
              type="button"
              className="w-full border border-gray-200 rounded-xl py-3 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            <p className="text-center text-sm pt-2 text-gray-600">
              Already have an account?
              <a
                href="#"
                className="pl-1 font-medium text-black hover:underline"
              >
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
