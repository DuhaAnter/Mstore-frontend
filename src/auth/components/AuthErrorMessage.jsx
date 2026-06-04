export default function AuthErrorMessage(props) {
  const {message} = props;  
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm mb-4">
      <span className="font-medium">{message}</span>
    </div>
  );
}
