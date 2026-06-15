import { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import MainLayout from "@/Components/MainLayout";

export default function Cart() {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-0.5 md:p-10">
      <div className="cart md:col-span-2">
        <h1 className="font-bold text-2xl mb-5">My Cart</h1>
        <hr />
        {/*  */}
        <div className="prd flex gap-2 md:gap-4 mt-5 border-b pb-4">
          <div className="flex justify-center items-center">
            <img
              src="/imgs/photo_٢٠٢٦-٠٥-٠٧_٠٠-٥٨-٠٩.jpg"
              className="rounded-2xl w-50 h-50"
            />
          </div>
          <div className=" flex flex-col justify-evenly md:py-3 w-2/3 gap-2">
            <div className="flex flex-col items-start md:flex-row md:gap-5 md:items-center">
              <h1 className="font-semibold text-xl md:text-3xl">Pink Dress</h1>
              <span className="text-xl md:text-2xl text-[#ffc107]">★★★★★</span>
              <span className="text-sm text-gray-700">(3 Reviews)</span>
            </div>
            <p className="text-gray-600 md:leading-relaxed text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi vero porro, earum maxime.
            </p>
            <div className="flex justify-between items-center md:w-1/2">
              <p className="text-xl font-semibold">$100</p>
              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-1 md:py-2">
                <button
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="cursor-pointer text-2xl text-gray-500 hover:text-gray-700 w-3 h-3 flex items-center justify-center transition"
                >
                  −
                </button>
                <span className="mx-6 text-xl font-medium w-3 text-center">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer text-2xl text-gray-500 hover:text-gray-700 w-3 h-3 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="prd flex gap-2 md:gap-4 mt-5">
          <div className="flex justify-center items-center">
            <img
              src="/public/imgs/photo_٢٠٢٦-٠٥-٠٧_٠٠-٥٨-٠٩.jpg"
              className="rounded-2xl w-50 h-50"
            />
          </div>
          <div className=" flex flex-col justify-between md:py-3 w-2/3 gap-2">
            <div className="flex flex-col items-start md:flex-row md:gap-5 md:items-center">
              <h1 className="font-semibold text-xl md:text-3xl">Pink Dress</h1>
              <span className="text-2xl text-[#ffc107]">★★★★★</span>
              <span className="text-sm text-gray-500">(3 Reviews)</span>
            </div>
            <p className="text-gray-600 md:leading-relaxed text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quasi vero porro, earum maxime.
            </p>
            <div className="flex justify-between items-center md:w-1/2">
              <p className="text-xl font-semibold">$100</p>
              <div className="flex items-center bg-gray-100 rounded-2xl px-3 py-1 md:py-2">
                <button
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="cursor-pointer text-2xl text-gray-500 hover:text-gray-700 w-3 h-3 flex items-center justify-center transition"
                >
                  −
                </button>
                <span className="mx-6 text-xl font-medium w-3 text-center">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer text-2xl text-gray-500 hover:text-gray-700 w-3 h-3 flex items-center justify-center transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Summary  */}
      <div className="order">
        <OrderSummary/>
      </div>
    </div>
    </MainLayout>
  );
}
