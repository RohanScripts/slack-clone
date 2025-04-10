import { Link } from "react-router";
import slackLogo from "../../assets/slack_logo.png";

const Login = () => {
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

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Sign in with Email
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          New to Slack?{" "}
          <Link
            to="/"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
