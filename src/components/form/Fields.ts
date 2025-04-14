import { regex } from "@/components/Regex";

export const SignupFields = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    regex: {
      value: regex.firstName,
      message: "Enter Valid Name",
    },
  },
  {
    id: "lastName",
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
    type: "text",
    required: true,
    regex: {
      value: regex.password,
      message:
        "Password must include uppercase, lowercase, number, 8 characters, and special character.",
    },
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "text",
    required: true,
    regex: {
      value: regex.password,
      message:
        "Password must include uppercase, lowercase, number, 8 characters, and special character.",
    },
  },
];

export const LoginFields = [
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
