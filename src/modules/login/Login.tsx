import { LoginFields } from "@/components/form/Fields";
import { FormField } from "@/components/form/FormField";
import { LoginSubmittedData } from "@/components/interfaces/Interfaces";
import { Link, useNavigate } from "react-router";
import { handleLogin } from "./handleLogin";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: LoginSubmittedData) => {
    setIsLoading(true);
    try {
      await handleLogin(data, () => navigate("/dashboard"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full">
      <div className="w-full ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Login to your Slack account
        </h1>
        <p className="text-center text-gray-600 mb-9">
          Connect with your team and get work done together.
        </p>
      </div>
      <FormField
        loading={isLoading}
        fields={LoginFields}
        onSubmit={handleSubmit}
        submitText="Login"
      />
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
