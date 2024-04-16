import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterRequest = yup
  .object({
    username: yup.string().required("Please fill in the email *"),
    password: yup
      .string()
      .required("Password is required *")
      .min(6, "Password must be at least 6 characters *"),
    password_confirm: yup
        .string()
        .required("Password confirm is required *")
        .oneOf([yup.ref('password')], 'Passwords must match *')
  })    
  .required();
