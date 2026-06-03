import { useState } from "react";
import { forget, reset, verify } from "../api/auth";

export default function Forgetpass() {
  const [step, setStep] = useState(1);
  // const [loading,setLoading] = useState(false);
  const [uiMessage, setUiMessage] = useState("");
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const data = await forget(email);
      setUiMessage(data.message);
      console.log(data);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
       const data = await verify(email,otpCode);
      console.log(email);
      console.log(data);
      setStep(3);
    } catch (error) {
      console.log(error);
    }
  };
  const handleResetPassword = async (e) =>{
    e.preventDefault();
    try {
      const data = await reset(email,otpCode,newPassword);
      console.log(data)
      console.log("doneeeeeeeeeeee")

    } catch (error) {
       console.log(error);
    }

  };
  const renderStepLayout = () => {
    switch (step) {
      case 1:
        return (
          <div className="max-w-md shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center">
            <p className="font-semibold text-6xl mb-5 font-['Pinyon_Script']">
              Fashions
            </p>
            <div className="text-center mb-5">
              <h1 className="text-3xl font-bold">Forgot your password?</h1>

              <p className="text-sm mt-3 leading-6">
                Enter your email address and we&apos;ll
                <br />
                send you an OTP to reset your password.
              </p>
              <p className="text-sm mt-2 leading-6 text-green-600">
                {uiMessage}
              </p>
            </div>
            <form action="" className="space-y-4" onSubmit={handleSubmitEmail}>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black  placeholder:text-gra"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
              >
                Send
              </button>
              <div className="flex items-center gap-4 px-8">
                <div className="flex-1 h-px bg-black"></div>
                <span className=" text-sm">or</span>
                <div className="flex-1 h-px bg-black"></div>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  className="
                flex items-center gap-2
                
                text-sm
                hover:underline
              "
                >
                  Back to Log In
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="max-w-md shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center">
            <p className="font-semibold text-6xl mb-5 font-['Pinyon_Script']">
              Fashions
            </p>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Enter OTP </h1>

              <p className="text-sm mt-3 leading-6">
                Check your email we have
                <br />
                sent you an OTP to reset your password.
              </p>
            </div>
            <form action="" className="space-y-4" onSubmit={handleSubmitOtp}>
              <input
                type="text"
                placeholder="6 digit OTP"
                className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black  placeholder:text-gra"
                value={otpCode}
                onChange={(e) => {
                  setOtpCode(e.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
              >
                Verify
              </button>
              <div className="flex items-center gap-4 px-8">
                <div className="flex-1 h-px bg-black"></div>
                <span className=" text-sm">or</span>
                <div className="flex-1 h-px bg-black"></div>
              </div>
            </form>

            <button
               onClick={()=>{setStep(1)}}
              className="
                cursor-pointer
                text-sm
                hover:underline
                mt-2
              "
            >
              Back to Email
            </button>
          </div>
        );
      case 3:
        return (
          <div className="max-w-md shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center">
            <p className="font-semibold text-6xl mb-5 font-['Pinyon_Script']">
              Fashions
            </p>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Reset your Password </h1>

              <p className="text-sm mt-3 leading-6">Enter your new password</p>
            </div>
            <form action="" className="space-y-4" onSubmit={handleResetPassword}>
              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-black-200 rounded-xl py-3 px-4 outline-none focus:border-black  "
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border border-gray-200 rounded-xl py-3 px-4 outline-none focus:border-black "
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
              >
                Reset
              </button>
              <div className="flex items-center gap-4 px-8">
                <div className="flex-1 h-px bg-black"></div>
                <span className=" text-sm">or</span>
                <div className="flex-1 h-px bg-black"></div>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  className="
                flex items-center gap-2
                
                text-sm
                hover:underline
              "
                >
                  Back to Log In
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {renderStepLayout()}
      </div>
    </>
  );
}
