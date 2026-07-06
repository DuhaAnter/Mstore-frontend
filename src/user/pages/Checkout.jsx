import { useEffect, useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaLock } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import OrderSummary from "../components/OrderSummary";
import { viewCart } from "../api/cart";
//validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../utils/checkoutValidation";

export default function Checkout() {
  const [variants, setVariants] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  //form validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    //That way these options are selected from the start.
    defaultValues: {
      paymentMethod: "card",
      saveInfo: false,
    },
  });
  const selectedPaymentMethod = watch("paymentMethod");

  // handlers
  const onFormSubmit = async (data) => {
    console.log("data object from onFormSubmit", data);
  };

  // calling api
  const fetchViewCart = async () => {
    try {
      const getCart = await viewCart();
      //console.log("data of view cart -->", getCart.data);
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

        <form
          id="checkout-form"
          onSubmit={handleSubmit(onFormSubmit)}
          className="mt-3 flex flex-col gap-5"
        >
          <p className="font-medium text-xl">1. Contact Information</p>

          <div className="flex flex-col md:flex-row items-start justify-between md:items-center text-sm text-gray-500 px-2 gap-2">
            <p>We’ll use this email to send you order updates.</p>
            <p>
              Already have an account?{" "}
              <span className="underline text-black cursor-pointer">
                Log in
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              {...register("email")}
              className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-black"
              }`}
              placeholder="Email Address *"
            />
            {errors.email && (
              <p className="text-sm text-red-600 px-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <p className="font-medium text-xl">2. Shipping Address</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <input
                {...register("fullName")}
                type="text"
                className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                }`}
                placeholder="Full Name *"
              />
              {errors.fullName && (
                <p className="text-sm text-red-600 px-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                {...register("phone")}
                type="text"
                className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                  errors.phone
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                }`}
                placeholder="Phone Number *"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 px-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <input
              {...register("shippingAddress")}
              type="text"
              className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                errors.shippingAddress
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-black"
              }`}
              placeholder="Address *"
            />
            {errors.shippingAddress && (
              <p className="text-sm text-red-600 px-1">
                {errors.shippingAddress.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <input
                {...register("city")}
                type="text"
                className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                  errors.city
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                }`}
                placeholder="City *"
              />
              {errors.city && (
                <p className="text-sm text-red-600 px-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input
                {...register("governorate")}
                type="text"
                className={`px-4 py-2.5 w-full border rounded focus:outline-none focus:ring-2 transition ${
                  errors.governorate
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:ring-black"
                }`}
                placeholder="Governorate *"
              />
              {errors.governorate && (
                <p className="text-sm text-red-600 px-1">
                  {errors.governorate.message}
                </p>
              )}
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              {...register("saveInfo")}
              type="checkbox"
              className="mt-1 h-4 w-4 accent-black"
            />
            <span className="text-sm text-gray-700">
              Save this information for next time
            </span>
          </label>

          <p className="font-medium text-xl">3. Payment Method</p>
          <p className="text-sm px-2 text-gray-500">
            All payments are secure and encrypted.
          </p>

          <div className="flex flex-col gap-3">
            <label
              className={`flex justify-between items-center rounded px-3 py-3 cursor-pointer transition border ${
                selectedPaymentMethod === "card"
                  ? "border-black bg-gray-50"
                  : errors.paymentMethod
                    ? "border-red-400"
                    : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  {...register("paymentMethod")}
                  type="radio"
                  value="card"
                  className="h-5 w-5 accent-black"
                />
                <p className="flex flex-col text-sm">
                  <span className="font-medium">Credit / Debit card</span>
                  <span className="text-xs text-gray-500 font-normal">
                    Visa, MasterCard, American Express
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <FaCcVisa className="text-3xl text-[#1A1F71]" />
                <FaCcMastercard className="text-3xl text-[#EB001B]" />
                <FaCcAmex className="text-3xl text-[#2E77BB]" />
              </div>
            </label>

            <label
              className={`flex justify-between items-center rounded px-3 py-3 cursor-pointer transition border ${
                selectedPaymentMethod === "cod"
                  ? "border-black bg-gray-50"
                  : errors.paymentMethod
                    ? "border-red-400"
                    : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  {...register("paymentMethod")}
                  type="radio"
                  value="cod"
                  className="h-5 w-5 accent-black"
                />
                <p className="flex flex-col text-sm">
                  <span className="font-medium">COD</span>
                  <span className="text-xs text-gray-500 font-normal">
                    Cash on Delivery
                  </span>
                </p>
              </div>

              <div className="px-5">
                <GiCash className="text-3xl text-green-600" />
              </div>
            </label>

            {errors.paymentMethod && (
              <p className="text-sm text-red-600 px-1">
                {errors.paymentMethod.message}
              </p>
            )}
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
              buttonText={isSubmitting ? "Placing Order..." : "Place Order"}
              showProductsSection={true}
              onButtonClick={handleSubmit(onFormSubmit)}
              disabled={isSubmitting}
            />
            <div className="my-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
              <FaLock className="text-base text-gray-600" />
              <span>Secure Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
