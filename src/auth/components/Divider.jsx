export default function Divider() {
  return (
    <>
      <div className="flex items-center gap-4 px-8">
        <div className="flex-1 h-px bg-black"></div>
        <span className=" text-sm">or</span>
        <div className="flex-1 h-px bg-black"></div>
      </div>
    </>
  );
}
