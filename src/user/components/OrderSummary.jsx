export default function OrderSummary() {
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-100 shadow-sm rounded-3xl sm:p-8">
      {/* Header */}
      <h1 className="font-semibold text-2xl mb-2">Order Summary</h1>
      
      {/* Coupon Button */}
      <button
        className="cursor-pointer text-sm text-gray-600 underline hover:text-black transition mb-6 block"
      >
        Have a Coupon?
      </button>

      {/* Pricing Rows */}
      <div className="space-y-4 border-b border-gray-100 pb-6 mb-6">
        <div className="flex justify-between items-center">
          <p className="font-medium ">Sub Total</p>
          <p className=" font-medium">$483.00</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="">Shipping and Handling</p>
          <p className=" text-sm"> ______ </p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="">Estimated Tax</p>
          <p className="">$40.00</p>
        </div>
      </div>

      {/* Grand Total */}
      <div className="flex justify-between items-center mb-8">
        <p className="font-bold text-xl ">Total</p>
        <p className="font-bold text-xl ">$523.00</p>
      </div>

      {/* Checkout Button */}
      <button className="w-full text-white bg-black py-4 px-6 rounded-2xl font-medium cursor-pointer hover:bg-gray-900 transition-all active:scale-[0.99]">
        Checkout
      </button>
    </div>
  );
}