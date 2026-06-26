import { clearCartNumber } from "@/store/sliceses/cartSlice";
import { clearUserInfo } from "@/store/sliceses/userSlice";
import AccountNav from "@/user/components/AccountNav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const handleChangEmail = () => {
    setChangeEmail(true);
  };
  const handleUpdateEmail = () => {
    setChangeEmail(false);
  };
  const handleChangPassword = () => {
    setChangePassword(true);
  };
  const handleUpdatePassword = () => {
    setChangePassword(false);
  };

  return (
    <div className=" py-5 px-5 sm:px-10">
        <AccountNav />
      <div className="border-b pb-5">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-5">
              {`Hi ${user.userName}`}
            </h1>
            <p className="leading-relaxed mb-5">
              View and Edit your personal Info below
            </p>
          </div>
          <div className="sm:px-10 flex ">
            <button 
            onClick={()=>navigate('/')}
            className="px-6 py-1.5 text-sm sm:py-2 sm:px-10 sm:text-lg font-medium border-2 border-black rounded-full mr-5 cursor-pointer">
              Discard
            </button>
            <button
              onClick={() => {dispatch(clearUserInfo()); dispatch(clearCartNumber());}}
              className="px-6 py-1.5 text-sm sm:py-2 sm:px-10 sm:text-lg font-medium text-white bg-black border-2 border-black rounded-full cursor-pointer"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      <div className=" border-b py-5">
        <h1 className="text-2xl font-semibold mb-5">Personal Info</h1>
        <p className="leading-relaxed mb-3 sm:text-xl">
          Update your personal Information
        </p>
        <form className="grid sm:grid-cols-2 sm:gap-30">
          <div className="col-span-1">
            <div className="flex flex-col my-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="border border-black rounded-sm py-2 px-2 outline-none  mt-2 focus:border-2 "
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="border border-black rounded-sm py-2 px-2 outline-none mt-2 focus:border-2"
              />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder=""
              className="border border-black rounded-sm py-2 px-2 outline-none mt-2 focus:border-2"
            />
          </div>
        </form>
      </div>
      <div className="border-b py-5">
        <h1 className="text-2xl font-semibold mb-5">Login Info</h1>
        <p className="leading-relaxed mb-3 sm:text-xl">
          Update your login Information
        </p>

        <p className="font-semibold ">Login Email: </p>
        {changeEmail ? (
          <div className="flex flex-col items-start gap-3 mt-3">
            <input
              type="text"
              value={user.userEmail}
              className="w-full max-w-sm border border-black rounded-sm py-3 px-4 outline-none focus:border-2"
            />

            <button
              className="px-6 sm:px-10 py-1.5 sm:py-2.5 text-sm sm:text-lg font-medium text-white bg-black border-2 border-black rounded-full mb-5"
              onClick={() => handleUpdateEmail()}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <p className="my-2 text-xl">{user.userEmail}</p>
            <button
              className="underline cursor-pointer block"
              onClick={() => handleChangEmail()}
            >
              Change Email
            </button>
          </div>
        )}
        
        <p className="font-semibold ">Password:</p>
        {changePassword ? (
          <div className="flex flex-col items-start gap-3 mt-3">
            <input
              type="password"
              className="w-full max-w-sm border border-black rounded-sm py-3 px-4 outline-none focus:border-2"
            />

            <button
              className="px-6 sm:px-10 py-1.5 sm:py-2.5 text-sm sm:text-lg font-medium text-white bg-black border-2 border-black rounded-full mb-5"
              onClick={() => handleUpdatePassword()}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <p className="text-4xl">••••••••</p>
            <button
              className="underline cursor-pointer"
              onClick={() => handleChangPassword()}
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
