import { FormField } from "@/components/form/FormField";
import { SignupSubmittedData } from "@/components/interfaces/Interfaces";
import { Link, useNavigate } from "react-router";
import { handleSignup } from "@/modules/signup/handleSignup";
import { SignupFields } from "@/components/form/Fields";
import { useState } from "react";

export const Signup = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: SignupSubmittedData) => {
    setIsLoading(true);
    try {
      await handleSignup(data, () => navigate("/login"));
    } finally {
      setIsLoading(false);
    }
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
        loading={isLoading}
        fields={SignupFields}
        submitText="Create Account"
        onSubmit={handleSubmit}
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
