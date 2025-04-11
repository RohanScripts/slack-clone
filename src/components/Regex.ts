export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  firstName: /^[A-Za-z]+(?:['\-][A-Za-z]+)*$/,
  surname: /^[A-Za-z]+(?:['\-][A-Za-z]+)*$/,
};
