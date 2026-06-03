import { Mail, ArrowLeft, MessageSquareMore } from "lucide-react";
export default function forgetPassword() {
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
                <img
                  src="../../public/imgs/logo.jpg"
                  alt="M Store Logo"
                  class="w-28 object-contain"
                />
              </div>
              {/* Heading */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#B56B86]">
                  Forgot your password?
                </h1>

                <p className="text-[#B88A98] text-sm mt-3 leading-6">
                  Enter your email address and we&apos;ll
                  <br />
                  send you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Label */}
                <div>
                  <label className="block text-sm font-medium text-[#B56B86] mb-2">
                    Email Address
                  </label>

                  {/* Input */}
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D97491]"
                    />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                  w-full
                  border border-pink-200
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-sm
                  outline-none
                  focus:border-[#D97491]
                  transition
                  placeholder:text-[#C59AA7]
                "
                    />
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  type="submit"
                  className="
              w-full
              bg-[#D97491]
              hover:opacity-90
              transition
              text-white
              font-medium
              py-3
              rounded-xl
            "
                >
                  Send Reset Link
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-pink-200"></div>

                  <span className="text-[#B88A98] text-sm">or</span>

                  <div className="flex-1 h-px bg-pink-200"></div>
                </div>

                {/* SMS Button */}
                <button
                  type="button"
                  className="
              w-full
              border border-[#D9A8B7]
              rounded-xl
              py-3
              flex items-center justify-center gap-3
              text-[#B56B86]
              font-medium
              hover:bg-pink-50
              transition
            "
                >
                  <MessageSquareMore size={18} />
                  Send via SMS instead
                </button>

                {/* Back */}
                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    className="
                flex items-center gap-2
                text-[#D97491]
                text-sm
                hover:underline
              "
                  >
                    <ArrowLeft size={16} />
                    Back to Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
