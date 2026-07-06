import { useState } from "react";
import { validateCpn } from "../api/cart";

export default function OrderSummary({
  summary,
  isCpnValid,
  cpnValid,
  buttonText,
  onButtonClick,
  showCouponSection,
  showProductsSection,
  variants,
  disabled,
}) {
  console.log("handler of place order button", onButtonClick);
  //console.log("products from inside summary", summary);
  const [applyCpn, setApplyCpn] = useState(false);
  const [code, setCode] = useState("");

  //handlers
  const handleApplyCoupon = async (code) => {
    try {
      const result = await validateCpn(code);
      console.log(result);
      if (result.status === "success") {
        isCpnValid(true);
      }
    } catch (error) {
      isCpnValid(false);
      console.log("failed to apply cpn", error);
    }
  };
  //helper
  const formatPrice = (value) => Number(value).toFixed(2);
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-100 shadow-sm rounded-3xl sm:p-8">
      {/* Header */}
      <h1 className="font-medium text-2xl mb-2">Order Summary</h1>

      {/* Coupon Button */}
      {showCouponSection && (
        <button
          onClick={() => setApplyCpn((prev) => !prev)}
          className="underline text-sm font-medium text-gray-700 hover:text-black transition mb-4 cursor-pointer"
        >
          <span>Have a coupon?</span>
        </button>
      )}

      {applyCpn && (
        <div className="flex flex-col  gap-3 mb-6 animate-in fade-in duration-200">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="Enter coupon code"
            className=" h-11 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />

          <button
            onClick={() => handleApplyCoupon(code)}
            className="h-11 px-6 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition cursor-pointer"
          >
            Apply
          </button>
        </div>
      )}
      {showProductsSection &&
        variants?.map((v) => (
          <div
            key={v.id}
            className=" flex items-center gap-2 my-3 border-b border-gray-100 pb-2"
          >
            <div className="w-24 h-24 shrink overflow-hidden rounded-xl">
              <img
                src={v.variant.product.imageURL}
                className="w-full h-full object-cover"
              />
            </div>

            <div className=" flex-1">
              <div className=" flex flex-col gap-1">
                <h1 className="font-semibold text-sm  truncate">
                  {v.variant.product.title}
                </h1>
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs">
                      <strong>Size: </strong>
                      {v.variant.size}
                    </p>
                    <p className="text-xs">
                      <strong>Color: </strong>
                      {v.variant.color}
                    </p>
                  </div>

                  <p className="text-sm font-semibold">$ {v.variant.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Pricing Rows */}
      {cpnValid === true && (
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
            ✓
          </span>
          <span className="text-sm font-medium">
            Coupon applied successfully
          </span>
        </div>
      )}
      {cpnValid === false && (
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
            X
          </span>
          <span className="text-sm font-medium">
            Coupon is Expired or Invalid
          </span>
        </div>
      )}
      <div className="space-y-4 border-b border-gray-100 pb-6 mb-6">
        <div className="flex justify-between items-center">
          <p className="font-medium ">Sub Total</p>
          <p className=" font-semibold">$ {formatPrice(summary.subtotal)}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Shipping and Handling</p>
          <p className=" text-sm font-semibold"> Free </p>
        </div>
        {summary.discount === 0 ? (
          ""
        ) : (
          <div className="flex items-center justify-between transition ">
            <p className="text-sm font-medium">Discount</p>
            <p className="text-sm font-semibold text-red-600">
              - ${formatPrice(summary.discount)}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Estimated Tax</p>
          <p className="text-sm font-semibold">
            $ {summary.subtotal === 0 ? 0 : formatPrice(summary.tax)}
          </p>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-xl ">Total</p>
        <p className="font-bold text-xl ">
          $ {summary.subtotal === 0 ? 0 : formatPrice(summary.total)}
        </p>
      </div>

      {/* Checkout Button */}
      <button
        type="button"
        onClick={onButtonClick}
        disabled={disabled}
        className={`w-full rounded py-3 font-medium transition ${
          disabled
            ? "bg-black/60 text-white cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
