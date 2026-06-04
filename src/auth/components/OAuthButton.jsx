
export default function OAuthButton(props) {
  const {title,handleOAuth} = props;
  return (
    <>
      <button
        type="button"
        className="w-full border border-black-200 rounded-xl py-3 flex items-center justify-center gap-3  cursor-pointer"
        onClick={handleOAuth}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        {title}
      </button>
    </>
  );
}
