import React, { useState } from "react";
import Button from "../ui/Button";
import SignInForm from "../Form/SignInForm";
import SignUpForm from "../Form/SignUpForm";
import { redirect } from "react-router-dom";
import store from "../store";
import { updateLoading, updateName } from "../user/userSlice";
import { signIn, signUp } from "../api/fetchApi";

function Login() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center border-[25px] border-pink-300 bg-gray-100 px-4 py-12 sm:border-[60px] sm:px-6 lg:px-8">
      <div className="relative inline-block overflow-hidden rounded-full bg-gray-300">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 transform rounded-full bg-fuchsia-500 ${
            isSignedIn ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        ></div>

        <Button onClick={() => setIsSignedIn(true)} type="toggle">
          Sign In
        </Button>
        <Button onClick={() => setIsSignedIn(false)} type="toggle">
          Sign Up
        </Button>
      </div>

      {isSignedIn ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default Login;

export async function signAction({ request }) {
  store.dispatch(updateLoading(true));
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const isSignedIn = data.phone ? false : true;

  try {
    const res = isSignedIn ? await signIn(data) : await signUp(data);
    store.dispatch(updateLoading(false));
    if (res?.data && res?.data?.message.includes("successfully")) {
      // successful (don't use too frequently)
      store.dispatch(updateName(data.username));
      return redirect("/Home");
    }

    if (res.status === 401) {
      // console.log("Authentication failed. Reason:", res.data.message);
      store.dispatch(updateName("authFailure"));
    } else if (res.status === 409) {
      // console.log("Username has been used");
      store.dispatch(updateName("registerFailure"));
    }
    return null;
  } catch (error) {
    console.error("Error during authentication:", error.message);
    return null;
  }
}
