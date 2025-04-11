import { FormField } from "@/components/FormField";
import { SignupSubmittedData } from "@/components/interfaces/Interfaces";
import { regex } from "@/components/Regex";
import { Link } from "react-router";

export const Signup = () => {
  const fields = [
    {
      id: "first-name",
      label: "First Name",
      type: "text",
      required: true,
      regex: {
        value: regex.firstName,
        message: "Enter Valid Name",
      },
    },
    {
      id: "last-name",
      label: "Last Name",
      type: "text",
      required: true,
      regex: {
        value: regex.surname,
        message: "Enter Valid Name",
      },
    },
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
    {
      id: "confirm-password",
      label: "Confirm Password",
      type: "password",
      required: true,
      regex: {
        value: regex.password,
        message:
          "Password must include uppercase, lowercase, number, 8 characters, and special character.",
      },
    },
  ];

  const handleSignup = (data: SignupSubmittedData) => {
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
      <FormField
        fields={fields}
        submitText="Create Account"
        onSubmit={handleSignup}
      />
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
  );
};
