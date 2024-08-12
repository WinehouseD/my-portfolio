import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message must be at least 5 characters")
    .max(500, "Message must be at most 500 characters"),
});
