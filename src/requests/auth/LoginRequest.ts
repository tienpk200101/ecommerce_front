import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const LoginRequest = yup
  .object({
    username: yup.string().required("Please fill in the username or email *"),
    password: yup
      .string()
      .required("Password is required *")
      .min(6, "Password must be at least 6 characters *"),
    remember_me: yup.boolean().notRequired(),
  })
  .required();
