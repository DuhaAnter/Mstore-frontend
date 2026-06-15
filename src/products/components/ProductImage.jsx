export default function ProductImage({ src, alt ="Product Image" }) {
  return (
    <div className="w-full  overflow-hidden rounded-t-lg">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-center" />
      ) : (
        <div className="w-full h-full bg-linear-to-r from-gray-200 to-gray-300 flex items-center justify-center">
          <span className="text-gray-400 text-sm">No image available</span>
        </div>
      )}
    </div>
  );
}
