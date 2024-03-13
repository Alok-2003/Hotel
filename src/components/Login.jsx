import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import parsePhoneNumberFromString from 'libphonenumber-js';
import OtpInput from "otp-input-react";

// import { CgSpinner } from "react-icons/cg";
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
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

            // const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber.number, recaptcha)
            setUser(confirmation)
        } catch (error) {
            console.error(error)
        }
    }

    const verifyOtp = async () => {
        try {
            const data = await user.confirm(otp);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="font-['gilroy'] flex justify-center items-center h-full bg-emerald-500">
            <div>
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>

                <PhoneInput country={"in"} value={phone} onChange={setPhone} className="mb-6" />

                <button
                    className="bg-emerald-700 w-80 flex  items-center justify-center py-2.5 text-white rounded text-xl mb-6"
                    onClick={sendOtp}
                >Send OTP</button>

                <div id="recaptcha" className="mb-6"></div>

                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container bg-emerald-500 text-black my-4   "
                ></OtpInput>

                <button
                    className="bg-emerald-700 w-80 flex  items-center justify-center py-2.5 text-white font-medium rounded text-xl mb-6"
                    onClick={verifyOtp}
                >Verify OTP</button>

            </div>
        </div>
    );
};

export default Login;
