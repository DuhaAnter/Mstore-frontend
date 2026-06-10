import { clearUserInfo } from "@/store/sliceses/userSlice";
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from 'react-router-dom';


export default function Profile() {
  const user = useSelector((state) => state.user);
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  // if (!user.userLoggedIn) {
  //   navigate("/login");
  // }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-red-600 text-center mb-4">
        TO BE USER PROFILE PAGE ISA
      </h1>
      {user.userName ? (
        <h3 className="text-blue-400">
          hi {user.userName}
          <br />
          yor are logged in
          <br />
          <button 
          onClick={()=>dispatch(clearUserInfo())}
          className="bg-black p-2 rounded text-white m-2 hover:cursor-pointer">Log out</button>
        </h3>
        

      ) : (
        <h3>hi guest</h3>
      )}

    </div>
  );
}
