import { useEffect, useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import OrderSummary from "../components/OrderSummary";
import { viewCart } from "../api/cart";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [variants, setVariants] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  // calling api
  const fetchViewCart = async () => {
    try {
      const getCart = await viewCart();
      console.log("data of view cart -->", getCart.data);
      setVariants(getCart.data.cart);
      setSummary(getCart.data.summary);
    } catch (error) {
      console.log("error fetching veiw cart", error);
    } finally {
      setLoading(false);
    }
  };
  // use effects
  useEffect(() => {
    fetchViewCart();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-10">
      <div className="flex-2">
        <h1 className="font-bold text-3xl md:text-3xl mb-5">Checkout</h1>
        <hr className="border-gray-200" />

        <form className="mt-3 flex flex-col gap-3">
          <p className="font-medium text-xl">1. Contact Information</p>
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center text-sm text-gray-500  px-2">
            <p className="">
              we will use this Email to send you order updates.
            </p>
            <p>
              Already have an account?{" "}
              <span className="underline text-black cursor-pointer">
                Log in
              </span>
            </p>
          </div>
          {/* email input */}
          <input
            type="email"
            className="px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Email Address *"
          />
          <p className="font-medium text-xl">2. Shipping Address</p>
          <div className="flex gap-3">
            <input
              type="email"
              className="px-4 py-2  w-1/2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Full Name *"
            />
            <input
              type="email"
              className="px-4 py-2 w-1/2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="Phone Number *"
            />
          </div>

          <input
            type="email"
            className="px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
            placeholder="Address *"
          />
          <div className="flex gap-3">
            <input
              type="email"
              className="px-4 py-2 w-1/2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="City *"
            />
            <input
              type="email"
              className="px-4 py-2 w-1/2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black transition"
              placeholder="State *"
            />
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span className="text-sm">Save this information for next time</span>
          </div>
          <p className="font-medium text-xl">3. Payment Method</p>
          <p className="text-sm px-2">All payments are secure and encrypted.</p>
          <div
            onClick={() => setPaymentMethod("card")}
            className={`flex justify-between items-center rounded py-2 px-3 cursor-pointer transition border ${
              paymentMethod === "card" ? "border-black" : "border-gray-400"
            }`}
          >
            <div className="flex  justify-center items-center gap-4">
              <div
                className={`h-5 w-5 rounded-full bg-white ${
                  paymentMethod === "card"
                    ? "border-[6px] border-black"
                    : "border border-gray-500"
                }`}
              ></div>
              <p className="flex flex-col text-sm">
                <span className="font-medium">Credit / Debit card</span>
                <span className="text-xs text-gray-500 font-normal">
                  Visa, Master Card, American Express
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCcVisa className="text-3xl text-[#1A1F71]" />
              <FaCcMastercard className="text-3xl text-[#EB001B]" />
              <FaCcAmex className="text-3xl text-[#2E77BB]" />
            </div>
          </div>
          <div
            onClick={() => setPaymentMethod("cod")}
            className={`flex justify-between items-center rounded py-2 px-3 cursor-pointer transition border ${
              paymentMethod === "cod" ? "border-black" : "border-gray-400"
            }`}
          >
            <div className="flex  justify-center items-center gap-4">
              <div
                className={`h-5 w-5 rounded-full bg-white ${
                  paymentMethod === "cod"
                    ? "border-[6px] border-black"
                    : "border border-gray-500"
                }`}
              ></div>
              <p className="flex flex-col text-sm">
                <span className="font-medium">COD</span>
                <span className="text-xs text-gray-500 font-normal">
                  Cash On Delivery
                </span>
              </p>
            </div>
            <div className="px-5">
              <GiCash className="text-3xl text-green-600" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1">
        {loading ? (
          <div className="flex justify-center items-center">
            <p>loading Summary</p>
          </div>
        ) : (
          <div className="lg:sticky lg:top-24">
            <OrderSummary
              variants={variants}
              summary={summary}
              buttonText="Place Order"
              showProductsSection={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
