import { Form } from "react-router-dom";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { getLoadingStatus, getUsername } from "../user/userSlice";

function SignInForm() {
  const failedSignIn = useSelector(getUsername) === "authFailure";
  const isLoading = useSelector(getLoadingStatus);

  return (
    <div className="w-full max-w-md space-y-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-600">
        Sign in to your account
      </h2>
      {failedSignIn && (
        <p className="text-center text-red-500">
          Username or Password are not correct, please try again
        </p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Form
          method="POST"
          className="mt-8 space-y-9 px-2 sm:space-y-6 sm:px-0"
        >
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button type="signIn">Sign In</Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default SignInForm;
