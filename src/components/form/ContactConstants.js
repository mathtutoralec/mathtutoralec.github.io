import * as yup from "yup";

const errors = {
  name: "Name is a required field",
  email: "The email provided is not valid",
  message: "Message required"
};
export const ContactCreateSchema = yup.object({
  name: yup.string(errors.name).required(errors.name),
  email: yup.string(errors.email).email(errors.email),
  message: yup.string(errors.message).required(errors.message)
});
