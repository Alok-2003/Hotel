import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import parsePhoneNumberFromString from 'libphonenumber-js';

// import { CgSpinner } from "react-icons/cg";
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import OtpInput from "otp-input-react";
// import { toast, Toaster } from "react-hot-toast";

const Login = () => {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOtp = async () => {
        try {
            const phoneNumber = parsePhoneNumberFromString(phone, 'IN');
            if (!phoneNumber || !phoneNumber.isValid()) {
                throw new Error('Invalid phone number format.');
            }

            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber.number, recaptcha)
            setUser(confirmation)
        } catch (error) {
            console.error(error)
        }
    }

    const verifyOtp = async () => {
        try {
           const data= await user.confirm(otp);
           console.log(data)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <PhoneInput country={"in"} value={phone} onChange={setPhone} className="mb-6" />

                <button 
                className="bg-emerald-600 w-80 flex  items-center justify-center py-2.5 text-white rounded text-xl mb-6"
                onClick={sendOtp}
                >Send OTP</button>

                <div id="recaptcha" className="mb-6"></div>

                <input 
                className="border-2 border-black w-80 py-2.5 text-black rounded text-xl mb-6" 
                placeholder="Enter OTP" 
                type="text" 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)}
                />

                <button 
                className="bg-emerald-600 w-80 flex  items-center justify-center py-2.5 text-white rounded text-xl mb-6"
                onClick={verifyOtp}
                >Verify OTP</button>

            </div>
        </div>
    );
};

export default Login;
