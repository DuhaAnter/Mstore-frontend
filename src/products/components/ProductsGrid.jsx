export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      <div className="card h-96 flex flex-col items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ">
        <div className="w-full  overflow-hidden rounded-t-lg">
          <img
            src="../../../public/imgs/product.jpg"
            alt="pink dress"
            className="w-full h-full object-center"
          />
        </div>

        <p className="font-semibold">Pink Dress</p>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <span className="font-semibold">$100</span>
      </div>
      <div className="card h-96 flex flex-col items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ">
        <div className="w-full  overflow-hidden rounded-t-lg">
          <img
            src="../../../public/imgs/product.jpg"
            alt="pink dress"
            className="w-full h-full object-center"
          />
        </div>

        <p className="font-semibold">Pink Dress</p>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <span className="font-semibold">$100</span>
      </div>
      <div className="card h-96 flex flex-col items-center rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ">
        <div className="w-full  overflow-hidden rounded-t-lg">
          <img
            src="../../../public/imgs/product.jpg"
            alt="pink dress"
            className="w-full h-full object-center"
          />
        </div>

        <p className="font-semibold">Pink Dress</p>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <span className="font-semibold">$100</span>
      </div>
    </div>
  );
}
