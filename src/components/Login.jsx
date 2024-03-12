import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
// import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  // const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      // const response = await setUpRecaptha(number);
      // setResult(response);
      // setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      // await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="md:min-h-[93.2vh] min-h-[86vh] flex justify-center items-center">
        <div className="h-fit bg-white shadow-xl rounded-xl px-8 pt-6 pb-6 border-2">
          <form onSubmit={getOtp} className="w-[300px]">
            <h1 className="text-4xl font-bold mb-4">Phone Sign Up</h1>
            {error && <div className="text-red-500">{error}</div>}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mt-3">
                Phone Number
              </h3>
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
              />
            </div>

            <div>
                
            </div>

            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Send OTP
              </button>
            </div>
          </form>

          <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mt-3">
              Enter OTP
            </h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter OTP"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
