import { useState } from "react";
import OrderSummary from "../components/OrderSummary";
import MainLayout from "@/Components/MainLayout";

export default function Cart() {
  //independent counts for independent products
  const [count1, setCount1] = useState(1);

  return (
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-10">
        <div className="cart lg:col-span-2 space-y-6">
          <h1 className="font-bold text-2xl md:text-3xl mb-5">My Cart</h1>
          <hr className="border-gray-200" />

          <div className="prd flex items-center gap-4 mt-5 border-b border-gray-100 pb-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink overflow-hidden rounded-2xl">
              <img
                src="/imgs/photo_٢٠٢٦-٠٥-٠٧_٠٠-٥٨-٠٩.jpg"
                className="w-full h-full object-cover"
                alt="Pink Dress"
              />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h1 className="font-semibold text-lg md:text-2xl truncate">
                    Pink Dress
                  </h1>
                  <div className="flex items-center gap-1">
                    <span className="text-lg text-[#ffc107]">★★★★★</span>
                    <span className="text-xs text-gray-500">(3 Reviews)</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs md:text-lg line-clamp-2 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  deleniti quasi vero porro.
                </p>
              </div>

              {/* Price & Counter Container */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg md:text-xl font-bold">$100</p>

                <div className="flex items-center bg-gray-100 rounded-xl px-2.5 py-1">
                  <button
                    onClick={() => setCount1(Math.max(1, count1 - 1))}
                    className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                  >
                    −
                  </button>
                  <span className="mx-3 text-sm md:text-base font-semibold w-4 text-center select-none">
                    {count1}
                  </span>
                  <button
                    onClick={() => setCount1(count1 + 1)}
                    className="cursor-pointer text-lg font-bold text-gray-500 hover:text-black w-6 h-6 flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <OrderSummary />
          </div>
        </div>
      </div>
    
  );
}
