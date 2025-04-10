import { Link } from "react-router";
import slackLogo from "../../assets/slack_logo.png";

const Signup = () => {
  return (
    <div className="flex min-h-screen">
      {/* left section */}
      <div className="hidden lg:w-1/2 bg-purple-700 lg:flex justify-center items-center p-5">
        <img src={slackLogo} alt="" className="max-w-lg" />
      </div>
      {/* right section */}
      <div className="w-full lg:w-1/2 px-6 py-12 flex flex-col justify-center items-center">
        <div className="w-full ">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Create your Slack account
          </h1>
          <p className="text-center text-gray-600 mb-9">
            Connect with your team and get work done together.
          </p>
        </div>
        <form className="flex flex-col gap-7">
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                id="first-name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                id="last-name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirtm-password"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex gap-2">
            <div>
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
            </div>
            <div className="text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to Slack's
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  {" "}
                  Terms of Service{" "}
                </a>
                and
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  {" "}
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Create Account
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
