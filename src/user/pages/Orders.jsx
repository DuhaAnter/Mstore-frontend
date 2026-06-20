import { useNavigate } from "react-router";
import AccountNav from "../components/AccountNav";
import { MdOutlineInventory2 } from "react-icons/md";

export default function Orders() {
    const navigate = useNavigate();

  return (
    <div className="py-5 px-5 md:px-10">
      <AccountNav />
      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-semibold mb-5">My Orders</h1>
          <p className="leading-relaxed mb-3">
            View and track your recent fashion purchases.
          </p>
        </div>
        {/*  Orders Container */}
        <div className="flex flex-col gap-10">
          {/*  Order Card 1: Processing */}
          <div className="border border-[#cfc4c5] p-4 md:p-6">
            {/*  Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-md pb-1 ">
                  Order #MS-12938
                </h3>
                <p className="text-xs font-medium  text-[#5e5e5e] ">
                  Placed on Oct 24, 2023
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-yellow-500 text-xs font-medium  uppercase tracking-wider border border-yellow-500 px-2 py-1">
                  Processing
                </span>
                <div className="hidden md:block w-px h-4 bg-[#cfc4c5]"></div>
                <span className="text-md font-semibold text-md ">
                  Total: $249.00
                </span>
              </div>
            </div>
            {/*  Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6 border-b  border-[#cfc4c5] mb-6">
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-2">
                  Payment Method
                </p>
                <p className="font-['Hanken Grotesk']   flex items-center  gap-1">
                  Visa •••• 1234 <span className=" ">(Paid)</span>
                </p>
              </div>
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-2">
                  Shipping Address
                </p>
                <p className="font-['Hanken Grotesk']  ">
                  72nd Nordic Street, Suite 4B
                  <br />
                  Stockholm, SE-114 51
                </p>
              </div>
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-3">
                  Promotions
                </p>
                <p className="font-['Hanken Grotesk']  ">
                  WELCOME10 Applied ($24.90)
                </p>
              </div>
            </div>
            {/*  Product List */}
            <div className="flex flex-col gap-4">
              {/*  Product Item 1 */}
              <div className="flex gap-4 items-center border-b border-[#eeeeee] pb-4">
                <div className="w-20 h-24  shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYLLfDOe_57IfvDzzX6lwsY4fGFnWqSEmLlz1OO_SGEAZ_uI3OtjqSzaEZUOcJJRrHtMZ9JSSkC5tG_nr4RFTd2Xa1aYPMtKhTqcQYpUuYfF_FuZy4bQq8b0Y2hs_T-5fhgiphv1rmivmU1LYsnkJMFKpKjH-Xd28HkxRTUN912evxya5PMzRa7HhdVvj7ANWXNahhPXu8Nhj-qzgBNcwTi7Lvt6wNami2pmMBwIWFgT89xnXkg4P33A"
                  />
                </div>
                <div className="grow flex flex-col md:flex-row md:justify-between md:items-center  gap-1">
                  <div>
                    <h4 className="text-md font-semibold">
                      Archival Wool Overcoat
                    </h4>
                    <p className="text-sm font-medium  text-[#5e5e5e] ">
                      Size: M | Color: Charcoal Grey | Qty: 1
                    </p>
                  </div>
                  <p className="text-md font-semibold text-md ">$249.00</p>
                </div>
              </div>
            </div>
          </div>
          {/*  Order Card 2: delivered */}

          <div className="border border-[#cfc4c5] p-4 md:p-6">
            {/*  Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-md pb-1 ">
                  Order #MS-12938
                </h3>
                <p className="text-xs font-medium  text-[#5e5e5e] ">
                  Placed on Oct 24, 2023
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-green-500 text-xs font-medium  uppercase tracking-wider border border-green-500 px-2 py-1">
                  delivered
                </span>
                <div className="hidden md:block w-px h-4 bg-[#cfc4c5]"></div>
                <span className="text-md font-semibold text-md ">
                  Total: $135.00
                </span>
              </div>
            </div>
            {/*  Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6 border-b  border-[#cfc4c5] mb-6">
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-2">
                  Payment Method
                </p>
                <p className="font-['Hanken Grotesk']   flex items-center  gap-1">
                  Visa •••• 1234 <span className=" ">(Paid)</span>
                </p>
              </div>
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-2">
                  Shipping Address
                </p>
                <p className="font-['Hanken Grotesk']  ">
                  72nd Nordic Street, Suite 4B
                  <br />
                  Stockholm, SE-114 51
                </p>
              </div>
              <div>
                <p className=" font-medium  text-[#5e5e5e]   mb-3">
                  Promotions
                </p>
                <p className="font-['Hanken Grotesk']  ">_______________</p>
              </div>
            </div>
            {/*  Product List */}
            <div className="flex flex-col gap-4">
              {/*  Product Item 1 */}
              <div className="flex gap-4 items-center border-b border-[#eeeeee] pb-4">
                <div className="w-20 h-24  shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFp-sQFG0-9_7f5CVdlln6vtdoY-0qy_6j5RMHPbQTPemrJMu6w9VdQzfc1VsrsQMnFmZ42KDJvejIanvfQneOrSsy5UROT328-SVJ74sxl0tTZ97PlpLlBI9L5d8D_p9i5FjyJX3t9S-dCfEz9JUQSkatRkw8Whj0D3xijvemTtJd9aXnakqImCFU26AYUwTlOgrt_isENSJkVCsWrl0p0NLWgiR7iscHsPWRrjpkXSPhOjhtqGBD0A"
                  />
                </div>
                <div className="grow flex flex-col md:flex-row md:justify-between md:items-center  gap-1">
                  <div>
                    <h4 className="text-md font-semibold">
                      Archival Wool Overcoat
                    </h4>
                    <p className="text-sm font-medium  text-[#5e5e5e] ">
                      Size: M | Color: Charcoal Grey | Qty: 1
                    </p>
                  </div>
                  <p className="text-md font-semibold text-md ">$249.00</p>
                </div>
              </div>
              {/* Product Item 2 */}
              <div className="flex gap-4 items-center ">
                <div className="w-20 h-24  shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFp-sQFG0-9_7f5CVdlln6vtdoY-0qy_6j5RMHPbQTPemrJMu6w9VdQzfc1VsrsQMnFmZ42KDJvejIanvfQneOrSsy5UROT328-SVJ74sxl0tTZ97PlpLlBI9L5d8D_p9i5FjyJX3t9S-dCfEz9JUQSkatRkw8Whj0D3xijvemTtJd9aXnakqImCFU26AYUwTlOgrt_isENSJkVCsWrl0p0NLWgiR7iscHsPWRrjpkXSPhOjhtqGBD0A"
                  />
                </div>
                <div className="grow flex flex-col md:flex-row md:justify-between md:items-center  gap-1">
                  <div>
                    <h4 className="text-md font-semibold">
                      Archival Wool Overcoat
                    </h4>
                    <p className="text-sm font-medium  text-[#5e5e5e] ">
                      Size: M | Color: Charcoal Grey | Qty: 1
                    </p>
                  </div>
                  <p className="text-md font-semibold text-md ">$249.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed  border-[#cfc4c5]">
            <MdOutlineInventory2 className=" text-5xl mb-2" />

            <h2 className="font-headline-md text-headline-md  mb-1">
              No orders yet
            </h2>
            <p className="font-body-lg   mb-3">
              Start your journey with our latest collection.
            </p>
            <button 
            onClick={()=>navigate('/products')}
            className="bg-black text-white px-10 py-4 font-bold transition-opacity hover:opacity-90">
              SHOP NOW
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}
