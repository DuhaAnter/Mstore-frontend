export default function PromoCard({
  discount = "30%",
  subtitle = "On everything today",
  code = "NEW2026",
  imageSrc,
}) {
  return (
    <div className="relative overflow-hidden px-5 py-10 bg-linear-to-r from-gray-200 to-gray-100 rounded-3xl">
      <div className="leading-loose tracking-widest flex flex-col ">
        <h1 className="text-2xl md:text-4xl font-bold">{discount} Off</h1>
        <p className="text-xl md:text-2xl font-semibold">{subtitle}</p>
        <p className="text-gray-500 my-1.5 md:my-3">With code:{code}</p>
        <button
          className="bg-black text-white self-start py-2  px-5
    rounded font-semibold md:font-bold transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95"
        >
          Shop Now
        </button>
        <div className="w-35  md:w-50 md:h-50 absolute bottom-0 right-0 md:top-0 ">
          <img src={imageSrc} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
