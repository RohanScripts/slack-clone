import { FormField } from "@/components/FormField";
import { LoginSubmittedData } from "@/components/interfaces/Interfaces";
import { regex } from "@/components/Regex";
import { Link } from "react-router";

export const Login = () => {
  const fields = [
    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true,
      regex: {
        value: regex.email,
        message: "Enter Valid Email",
      },
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      required: true,
      regex: {
        value: regex.password,
        message:
          "Password must include uppercase, lowercase, number, 8 characters, and special character.",
      },
    },
  ];

  const handleLogin = (data: LoginSubmittedData) => {
    console.log(data);
  };

  return (
    <div className="max-w-md w-full">
      <div className="w-full ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create your Slack account
        </h1>
        <p className="text-center text-gray-600 mb-9">
          Connect with your team and get work done together.
        </p>
      </div>
      <FormField fields={fields} onSubmit={handleLogin} submitText="Login" />
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
  );
};
