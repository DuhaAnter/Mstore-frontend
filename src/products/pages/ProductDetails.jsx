import React from "react";

export default function ProductDetails() {
  return (
    <div className="p-10">
      <div className="prd sm:flex gap-3">
        <div className="w-1/2">
          <img src="../../../public/imgs/product.jpg" className="h-96 w-full rounded-3xl" />
        </div>
        <div>
          <h1 className="font-bold text-2xl" style={{ marginTop: "-15px" }}>
            Pink Dress
          </h1>
          <div className="rating">
            <span className="text-2xl text-[#ffc107] mr-2">
              ★★★★★
            </span>
            <span className="text-[12px]">(320 Review)</span>
          </div>
          <p className="text-xl font-semibold my-4">$1800</p>
          <h2 className="text-xl font-medium">Description</h2>
          <p className="text-gray-500 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsam
            odio alias dicta enim perferendis perspiciatis harum sed dolorem
            consequuntur.
          </p>
          <div className="variations flex">
            <div>
              <p>Colors</p>
              <div>
                <span>red</span>
                <span>blue</span>
                <span>green</span>
              </div>
            </div>
            <div>
              <p>Size</p>
              <div>
                <span>X</span>
                <span>XXL</span>
                <span>XXXL</span>
              </div>
            </div>
          </div>
          <span>+1-</span>
          <button>Add to cart</button>
        </div>
      </div>
      <div className="related p-5 hidden sm:block">
        <h1>related items</h1>
      </div>
    </div>
  );
}
