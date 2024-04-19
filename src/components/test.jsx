import React from 'react';

const Test = () => {
  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-md p-8">
      <div className="text-center font-bold text-2xl text-blue-600 mb-6">Sign In</div>
      <form className="space-y-4">
        <input
          required
          className="input-style"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          required
          className="input-style"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span className="block text-center text-sm text-blue-500">
          <a href="#">Forgot Password ?</a>
        </span>
        <button className="btn-login">Sign In</button>
      </form>
      <div className="text-center mt-6">
        <span className="block font-semibold text-sm text-blue-600 mb-1">Or Sign in with</span>
        <div className="flex justify-center space-x-4">
          <button className="social-btn-google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 14a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-2a4 4 0 014-4h14a4 4 0 014 4v2"
              />
            </svg>
          </button>
          <button className="social-btn-apple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 14a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-2a4 4 0 014-4h14a4 4 0 014 4v2"
              />
            </svg>
          </button>
          <button className="social-btn-twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 14a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-2a4 4 0 014-4h14a4 4 0 014 4v2"
              />
            </svg>
          </button>
        </div>
      </div>
      <span className="block text-center text-xs text-blue-500 mt-6">
        <a href="#">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default Test;
