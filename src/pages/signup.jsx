

export default function signup() {
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
             
    
    {/* <!-- Logo --> */}
    <div class="flex justify-center mb-6">
      <img src="../../public/imgs/logo.jpg" alt="M Store Logo" class="w-28 object-contain" />
    </div>

    {/* <!-- Heading --> */}
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-[#D97491]">
        Create your account
      </h2>
      <p class="text-[#B97A8E] mt-2">
        Let's get you started!
      </p>
    </div>

    {/* <!-- Form --> */}
    <form class="space-y-4">

      {/* <!-- Full Name --> */}
      <div class="relative">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#D97491]">
       
        </span>

        <input
          type="text"
          placeholder="Full Name"
          class="w-full border border-pink-200 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#D97491] text-[#6B4C57] placeholder:text-[#C79AA8]"
        />
      </div>

      {/* <!-- Email --> */}
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

      {/* <!-- Confirm Password --> */}
      <div class="relative">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#D97491]">
         
        </span>

        <input
          type="password"
          placeholder="Confirm Password"
          class="w-full border border-pink-200 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-[#D97491] text-[#6B4C57] placeholder:text-[#C79AA8]"
        />

        <button
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-[#D97491]"
        >
          
        </button>
      </div>

      {/* <!-- Create Account Button --> */}
      <button
        type="submit"
        class="w-full bg-[#D97491] hover:opacity-90 transition text-white font-semibold py-3 rounded-xl mt-2"
      >
        Create Account
      </button>

      {/* <!-- Divider --> */}
      <div class="flex items-center gap-4 py-2">
        <div class="flex-1 h-px bg-pink-200"></div>
        <span class="text-[#B97A8E] text-sm">or</span>
        <div class="flex-1 h-px bg-pink-200"></div>
      </div>

      {/* <!-- Google Button --> */}
      <button
        type="button"
        class="w-full border border-pink-200 rounded-xl py-3 flex items-center justify-center gap-3 text-[#B97A8E] hover:bg-pink-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          class="w-5 h-5"
        />

        Sign up with Google
      </button>

      {/* <!-- Sign In --> */}
      <p class="text-center text-[#B97A8E] text-sm pt-2">
        Already have an account?
        <a href="#" class="text-[#D97491] font-medium hover:underline">
          Sign In
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
