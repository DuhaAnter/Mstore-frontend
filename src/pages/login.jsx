export default function login() {
  return (
    <>
      <div className="min-h-screen bg-[#E4D6DA]">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-[80%]  flex ">
            <div className="w-[50%] bg-[#ebcdd5b9] flex flex-col items-center justify-center gap-2 p-3 ">
              <img
                src="../../public/imgs/4jpg.jpg"
                className="w-1/2 rounded-4xl"
              />
              <p className="text-[#D97491] font-semibold">
                Fashion for every you
              </p>
              <p className="text-[#a68491]">
                Find your style ... Wear your confidence
              </p>
            </div>
            <div className="w-[50%] bg-white flex flex-col items-center justify-center gap-2">
                    <img src="../../public/imgs/logo.jpg" alt="M Store Logo" class="w-28 object-contain" />

              <p className="text-[#a68491] font-semibold text-3xl">
                Welcome Back
              </p>
              <form className=" space-y-4 ">
                <div class="relative">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#D97491]">
          
        </span>

        <input
          type="email"
          placeholder="Email Address"
          class="w-full border border-pink-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D97491] text-[#6B4C57] placeholder:text-[#C79AA8]"
        />
      </div>

      {/* <!-- Password --> */}
      <div class="relative">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#D97491]">
         
        </span>

        <input
          type="password"
          placeholder="Password"
          class="w-full border border-pink-200 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-[#D97491] text-[#6B4C57] placeholder:text-[#C79AA8]"
        />

        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-[#D97491]"
        >
         
        </button>
      </div>

                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-[#D97491] hover:text-[#D97491]"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D97491] text-white py-2 rounded-lg hover:bg-[#D97491]"
                >
                  Sign In
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <button
        type="button"
        class="w-full border border-pink-200 rounded-xl py-3 flex items-center justify-center gap-3 text-[#B97A8E] hover:bg-pink-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          class="w-5 h-5"
        />

        Sign in with Google
      </button>

                <p className="text-center text-sm text-gray-600">
                  New here?
                  <a href="#" className="text-[#D97491] hover:text-[#D97491]">
                    Create Account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
