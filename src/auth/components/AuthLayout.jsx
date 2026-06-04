

export default function AuthLayout(props) {
    //console.log(props)
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-5">
        <div className="max-w-md  shadow-2xl rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center">
          <p className="font-semibold text-6xl mb-5 font-['Pinyon_Script']">
            Fashions
          </p>

          {/*form goes here */}
            {props.children}
          
        </div>
      </div>
    </>
  );
}
