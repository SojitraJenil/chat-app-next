import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router'
import { auth } from "../../firebase";
import Cookies from "universal-cookie";
import dynamic from "next/dynamic";


function Auth1() {

  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const authToken = cookies.get("auth-token");
    if (authToken) {
      console.log("Navigating to /join"); // Check if navigation is supposed to happen
      router.push("/join");
    }
  }, [cookies, router]);

  const signInGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Set the authentication token in a cookie with an expiry of 7 days
      const cookies = new Cookies();
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7); // Add 7 days to the current date
      cookies.set("auth-token", result.user.refreshToken, { expires: expiryDate });
  
      router.push("/join");
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div >
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Authentication
          </h2>
          <hr className="text-gray-100 my-2" />
          <button
            onClick={signInGoogle}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-70 duration-300 text-[#002D74]"
          >
            <FcGoogle className="text-2xl me-4" />
            Login with Google
          </button>
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-70 duration-300 text-[#002D74]"
          >
            <FaFacebook className="text-2xl me-4" />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>

  );
}
export default dynamic(() => Promise.resolve(Auth1), { ssr: false });
