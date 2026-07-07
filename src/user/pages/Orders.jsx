import { useLocation, useNavigate } from "react-router";
import AccountNav from "../components/AccountNav";
import { MdOutlineInventory2 } from "react-icons/md";
import { useEffect, useState } from "react";
import { getAllOrders } from "../api/checkout";
import { FaBoxOpen } from "react-icons/fa";

export default function Orders() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const successMessage = location.state?.successMessage;
  const newOrderId = location.state?.newOrderId;
  //calling api
  const fetchOrders = async () => {
    try {
      const orders = await getAllOrders();
      setOrders(orders.data);
      //console.log(orders.data);
    } catch (error) {
      console.log("error fetching all orders", error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  //useEffects
  useEffect(() => {
    fetchOrders();
  }, []);

  //while loading
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <p>loading orders</p>
      </div>
    );
  // empty
  if (orders.length === 0) {
    return (
      <div className="p-4 md:p-10">
        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed  border-[#cfc4c5]">
          <FaBoxOpen className=" text-5xl mb-2" />

          <h2 className="font-medium  mb-1">No orders yet</h2>
          <p className="font-semibold  mb-5">
            Start your journey with our latest collection.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-black text-white px-10 py-4 font-bold transition-opacity hover:opacity-90 rounded-2xl cursor-pointer"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    );
  }

  //helper
  //1.
  const formatPrice = (value) => Number(value).toFixed(2);
  //2.
  const getStatusClasses = (status) => {
    switch (status) {
      case "SHIPPED":
      case "DELIVERED":
        return "text-green-600 border-green-600 bg-green-50";

      case "PENDING":
        return "text-yellow-600 border-yellow-500 bg-yellow-50";

      case "CANCELLED":
        return "text-red-600 border-red-600 bg-red-50";

      default:
        return "text-gray-600 border-gray-400 bg-gray-50";
    }
  };
  //main
  return (
    <div className="py-5 px-5 md:px-10">
      <AccountNav />
      <div>
        <div className=" mb-3">
          <h1 className="text-2xl font-semibold mb-5">My Orders</h1>
          <p className="leading-relaxed mb-3">
            View and track your recent fashion purchases.
          </p>
        </div>
        {successMessage && (
          <div className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 text-center font-medium mb-3">
            {successMessage}
          </div>
        )}
        {/*  Orders Container */}
        <div className="flex flex-col gap-10">
          {/*  Order Card */}

          {orders.map((order) => {
            const isNewOrder = order.id === newOrderId;
            return (
              <div
                key={order.id}
                className={`border border-[#cfc4c5] p-4 md:p-6 ${
                  isNewOrder
                    ? "border-green-500 border-l-4 border-l-green-500"
                    : "border-[#cfc4c5]"
                }`}
              >
                {/*  Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-md pb-1 ">
                      Order #MS-{order.id.slice(0, 5)}
                      {isNewOrder && (
                        <span className="text-xs font-semibold uppercase bg-green-600 text-white px-2 py-1 rounded mx-5">
                          New
                        </span>
                      )}
                    </h3>

                    <p className="text-xs font-medium  text-[#5e5e5e] ">
                      Placed on{" "}
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span
                      className={`text-sm font-medium uppercase tracking-wider border px-2 py-1 rounded ${getStatusClasses(order.status)}`}
                    >
                      {order.status}
                    </span>
                    <div className="hidden md:block w-px h-4 bg-[#cfc4c5]"></div>
                    <span className="text-md font-semibold text-md ">
                      Total: ${formatPrice(order.total)}
                    </span>
                  </div>
                </div>
                {/*  Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 pb-6 border-b  border-[#cfc4c5] mb-6">
                  <div>
                    <p className=" font-medium  text-lg text-[#5e5e5e]   mb-2">
                      Meta Data
                    </p>
                    <p className="font-['Hanken Grotesk']  gap-1">
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Name:{" "}
                      </span>{" "}
                      {order.fullName}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Phone:{" "}
                      </span>{" "}
                      {order.phone}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Email:{" "}
                      </span>{" "}
                      {order.email}
                    </p>
                  </div>
                  <div>
                    <p className=" font-medium text-lg text-[#5e5e5e]   mb-2">
                      Payment Method
                    </p>
                    <p className="font-['Hanken Grotesk']  gap-1">
                      {order.paymentMethod} <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Status:{" "}
                      </span>{" "}
                      {order.paymentStatus}
                    </p>
                  </div>
                  <div>
                    <p className=" font-medium text-lg text-[#5e5e5e]   mb-2">
                      Shipping Address
                    </p>
                    <p className="font-['Hanken Grotesk']  ">
                      {order.shippingAddress}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        City:{" "}
                      </span>{" "}
                      {order.city}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Governorate:{" "}
                      </span>{" "}
                      {order.governorate}
                    </p>
                  </div>
                  <div>
                    <p className=" font-medium text-lg text-[#5e5e5e]   mb-3">
                      Coupons
                    </p>
                    <p className="font-['Hanken Grotesk']">
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Code:{" "}
                      </span>
                      {order.coupon?.code || "No coupon"}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Discount:{" "}
                      </span>
                      {order.coupon?.discount
                        ? `${order.coupon.discount}%`
                        : "—"}
                      <br />
                      <span className="text-sm font-medium text-[#5e5e5e] mb-2">
                        Discount Applied:
                      </span>
                      ${formatPrice(order.discountApplied || 0)}
                    </p>
                  </div>
                </div>
                {/*  Product List */}
                <div className="flex flex-col gap-4">
                  {/*  Product Item  */}
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-center border-b border-[#eeeeee] pb-4"
                    >
                      <div className="w-20 h-24  shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          src={item.variant.product.imageURL}
                        />
                      </div>
                      <div className="grow flex flex-col md:flex-row md:justify-between md:items-center  gap-1">
                        <div>
                          <h4 className="text-md font-semibold">
                            {item.variant.product.title}
                          </h4>
                          <p className="text-sm font-semibold  text-[#5e5e5e] ">
                            Size:{" "}
                            <span className="text-black">
                              {item.variant.size}
                            </span>{" "}
                            | Color:{" "}
                            <span className="text-black">
                              {item.variant.color}
                            </span>{" "}
                            | Qty:{" "}
                            <span className="text-black">
                              {item.quantity}
                            </span>{" "}
                          </p>
                        </div>
                        <p className="text-md font-semibold text-md ">
                          ${formatPrice(item.priceAtPurchase)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
