import BackendError from "@/Components/BackendError";
import PromoCard from "@/Components/PromoCard";
import { getProducts } from "@/products/api/products";
import ProductsGrid from "@/products/components/ProductsGrid";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  //call the product api inside a useEffect cause i need them the second page loads

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getProducts({
          limit: 8,
          sort: "newest",
        });
        console.log(" API Response of new arrivals:", data);
        setProducts(data);
      } catch (error) {
        console.log(error);
        //server is down
        if (error.code === "ERR_NETWORK") {
          setError(
            "We couldn't connect to the server. Please check your connection and try again",
          );
        } else if (error.response) {
          setError(
            error.response?.data?.message ||
              "We couldn't load the latest arrivals. Please try again later",
          );
        } else {
          setError("Something went wrong while loading the latest arrivals");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <div className="flex flex-col gap-10 md:gap-15">
      {/* first section */}
      <div className="relative bg-[url('./imgs/hero.jpg')] bg-cover bg-center h-96">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className=" relative z-10 flex justify-end  h-full items-center ">
          <div className="text-white leading-loose tracking-widest flex flex-col gap-5 md:w-1/2 pr-5 md:px-20 items-end">
            <h1 className="text-5xl font-bold">30% Off</h1>
            <p className="text-2xl md:text-4xl font-semibold">
              On everything Today
            </p>
            <p className="text-gray-300 md:text-xl font-light">
              With code:NEW2026
            </p>
            <button
              className="bg-black text-white
    py-2 md:py-4 px-5 md:px-10
    rounded md:rounded-3xl
    md:text-2xl font-semibold md:font-bold
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-xl
    active:translate-y-0
    active:scale-95
  "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* second : New Arrivals */}
      <div className="flex flex-col justify-center gap-10 px-3 md:px-10">
        <div className="flex justify-between w-full items-center font-['Montserrat'] leading-relaxed">
          <h1 className="text-2xl md:text-4xl font-medium ">New Arrivals</h1>
          <button className="text-xs md:text-sm text-gray-400 hover:underline hover:font-medium transition-all duration-300">
            View All
          </button>
        </div>

        {loading && (
          <div>
            <h1>New Arrivals Are Loading...</h1>
          </div>
        )}
        {error && <BackendError message={error} />}

        <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
          <ProductsGrid
            products={products}
            className="w-[75vw] sm:w-60 shrink-0 shadow-none"
          ></ProductsGrid>
        </div>
      </div>

      {/* third section : promo cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  px-3 md:px-10 ">
        <PromoCard
          imageSrc="/imgs/women-removebg-preview.png"
          discount="50%"
          subtitle="On Women Clothes"
        />
        <PromoCard
          imageSrc="/imgs/childd-removebg-preview.png"
          subtitle="On Kids Clothes"
        />

        <div className="md:col-span-2 relative overflow-hidden px-5 md:px-80 py-10 bg-linear-to-r from-[#e8e5e5] via-[#e2dddd] to-[#d8d3d3] rounded-3xl flex justify-end items-center">
          <div className="leading-loose tracking-widest flex flex-col items-end md:items-center">
            <div className="flex items-center justify-center gap-1.5">
              <div className="md:w-15 md:h-0.75 bg-black"></div>
              <h1 className="text-2xl md:text-4xl font-bold">50% Off</h1>
              <div className="md:w-15 md:h-0.75 bg-black"></div>
            </div>

            <p className="text-sm md:text-2xl font-semibold">On Men Clothes</p>
            <p className=" text-xs md:text-xl text-gray-500 mt-1.5 mb-2.5  md:my-3 font-semibold">
              With code:MEN2026
            </p>
            <button
              className="bg-black text-white py-2  px-5
    rounded font-semibold md:font-bold transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95"
            >
              Shop Now
            </button>
            <div className="w-45 md:w-68 md:h-68 absolute left-0 top-5 md:left-40 md:top-0 ">
              <img
                src="/imgs/menn-removebg-preview.png"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* forth  :testimonials*/}
      <div className="flex flex-col px-3 md:px-10  z-10 -mb-36">
        <h1 className="text-2xl md:text-4xl font-medium p-5 font-['Montserrat'] leading-relaxed">
          Testimonials
        </h1>

        <div className="gird grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex flex-wrap justify-center gap-5">
          <div className="bg-white rounded-2xl p-5 w-65 flex flex-col items-center shadow-2xl">
            <img
              src="/imgs/user.jpg"
              className="w-25 h-25 rounded-3xl object-cover"
              alt=""
            />
            <h1 className="font-semibold">Cat User</h1>
            <p className="text-gray-500 text-xs">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="flex gap-0.5 mt-2">
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
            </p>
            <p className="text-center leading-tight font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sed ad
              nihil commodi delectus autem earum eos itaque quidem velit?
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 w-65 flex flex-col items-center shadow-2xl">
            <img
              src="/imgs/user.jpg"
              className="w-25 h-25 rounded-3xl object-cover"
              alt=""
            />
            <h1 className="font-semibold">Cat User</h1>
            <p className="text-gray-500 text-xs">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="flex gap-0.5 mt-2">
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
            </p>
            <p className="text-center leading-tight font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sed ad
              nihil commodi delectus autem earum eos itaque quidem velit?
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 w-65 flex flex-col items-center shadow-2xl">
            <img
              src="/imgs/user.jpg"
              className="w-25 h-25 rounded-3xl object-cover"
              alt=""
            />
            <h1 className="font-semibold">Cat User</h1>
            <p className="text-gray-500 text-xs">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="flex gap-0.5 mt-2">
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
            </p>
            <p className="text-center leading-tight font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sed ad
              nihil commodi delectus autem earum eos itaque quidem velit?
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 w-65 flex flex-col items-center shadow-2xl">
            <img
              src="/imgs/user.jpg"
              className="w-25 h-25 rounded-3xl object-cover"
              alt=""
            />
            <h1 className="font-semibold">Cat User</h1>
            <p className="text-gray-500 text-xs">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="flex gap-0.5 mt-2">
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
              <FaStar className="fill-amber-400" />
            </p>
            <p className="text-center leading-tight font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sed ad
              nihil commodi delectus autem earum eos itaque quidem velit?
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-black text-white pt-45 px-10 pb-5 ">
        <div className="flex flex-col md:flex-row gap-5 justify-between  md:items-center md:border-b border-gray-400 pb-3 ">
          <div className="">
            <h5 className="font-bold mb-3 leading-relaxed">Resources</h5>
            <ul>
              <li>Find A store</li>
              <li>Become A memeber</li>
              <li>Send us Feedback</li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold mb-3 leading-relaxed">Help</h5>
            <ul>
              <li>Get Help</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold mb-3 leading-relaxed">Comapny</h5>
            <ul>
              <li>
                About{" "}
                <span className="font-['Montserrat'] font-semibold ">
                  M Store
                </span>
              </li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="flex flex-col md:self-end gap-3 md:items-center">
            <p className="font-['Pinyon_Script'] text-5xl tracking-wider">
              M Store
            </p>
            <div className="flex gap-3">
              <p>Privacy Policy</p>
              <p>|</p>
              <p>Terms of Use </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
