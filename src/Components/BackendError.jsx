export default function BackendError({ message }) {
  if (!message) return null; // do nothing
  return (
    <div className="flex justify-center items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm my-4">
      <span className="font-medium">{message}</span>
    </div>
  );
};
