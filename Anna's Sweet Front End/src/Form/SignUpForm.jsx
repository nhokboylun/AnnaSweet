import { Form } from "react-router-dom";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { getLoadingStatus, getUsername } from "../user/userSlice";
import Loader from "../ui/Loader";
import { useState } from "react";

function SignUpForm() {
  const failedSignUp = useSelector(getUsername) === "registerFailure";
  const isLoading = useSelector(getLoadingStatus);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);

  const [password, setPassword] = useState("");
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isUppercaseValid, setIsUppercaseValid] = useState(false);
  const [isLowercaseValid, setIsLowercaseValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isSpecialCharValid, setIsSpecialCharValid] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    if ((/^\d+$/.test(value) && value.length <= 10) || value === "") {
      setIsValidPhone(true);
      setPhoneNumber(value);
    } else {
      setIsValidPhone(false);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Length check
    setIsLengthValid(value.length >= 8);

    // Uppercase check
    setIsUppercaseValid(/[A-Z]/.test(value));

    // Lowercase check
    setIsLowercaseValid(/[a-z]/.test(value));

    // Number check
    setIsNumberValid(/\d/.test(value));

    // Special character check
    setIsSpecialCharValid(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value));
  };

  const styles =
    "relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-md";

  return (
    <div className="w-full max-w-md space-y-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-600">
        Sign Up your account here
      </h2>

      {failedSignUp && (
        <p className="text-center text-red-500">
          Username has been used. Please use other username.
        </p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Form method="POST" className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                className={styles}
                placeholder="First Name"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                className={styles}
                placeholder="Last Name"
              />
            </div>

            <div>
              <label htmlFor="username" className="sr-only">
                username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className={styles}
                placeholder="Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className={styles}
                placeholder="Password"
              />
              <div className="mt-2 grid items-center justify-center gap-y-1 px-3 sm:grid-cols-2">
                <span
                  className={`text-sm ${
                    isLengthValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Minimum 8 characters
                </span>
                <span
                  className={`text-sm ${
                    isUppercaseValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Uppercase letter
                </span>
                <span
                  className={`text-sm ${
                    isLowercaseValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Lowercase letter
                </span>
                <span
                  className={`text-sm ${
                    isNumberValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Number
                </span>
                <span
                  className={`text-sm ${
                    isSpecialCharValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  Special character
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                className={styles}
                placeholder="Phone Number"
              />
              {!isValidPhone && (
                <span className="text-sm text-red-500">
                  Numbers only & can't exceed 10 numbers
                </span>
              )}
            </div>
          </div>

          <div>
            <Button type="signIn">Sign Up</Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default SignUpForm;
