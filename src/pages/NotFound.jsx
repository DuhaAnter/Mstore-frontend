import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="overflow-hidden bg-[#f9f9f9] py-10 min-h-screen flex justify-center items-center">
      <div className="relative max-w-300 mx-auto px-10 flex flex-col items-center text-center">
        <div className="relative select-none my-5">
          <span className="italic block font-playfair font-bold text-[140px] lg:text-[180px] leading-none text-[#e2e2e2] tracking-tighter mix-blend-multiply opacity-80">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-jakarta font-semibold text-xl leading-7 italic text-[#5e5e5e] tracking-widest uppercase">
              Piece Not Found
            </span>
          </div>
        </div>

        <h1 className="font-jakarta font-semibold text-2xl sm:text-[44px] sm:leading-13 text-black tracking-tight max-w-2xl mb-4">
          Lost in the Collection?
        </h1>
        <p className=" text-[#5e5e5e] max-w-xl mx-auto leading-relaxed mb-5">
          The link you followed may be broken, or the garment has sold out and
          transitioned out of our active seasonal catalog.
        </p>

        <div className="flex flex-wrap items-center justify-center">
          <Link
            to={"/"}
            className="inline-flex items-center justify-center bg-black text-white font-semibold text-xl px-8 py-3.5 rounded-full transition-all hover:bg-neutral-800 active:scale-95 shadow-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
