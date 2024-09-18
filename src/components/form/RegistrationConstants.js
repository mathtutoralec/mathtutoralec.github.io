import * as yup from "yup";

const errors = {
  name: "Name is a required field",
  email: "The email provided is not valid",
  phone: "Phone number is a required field",
  student: "Student name is required",
  grade: "Grade is required",
  program: "Please select at least one program"
};
export const RegistrationSchema = yup.object({
  name: yup.string(errors.name).required(errors.name),
  email: yup.string(errors.email).required(errors.email).email(errors.email),
  phone: yup.string(errors.phone).required(errors.phone),
  student: yup.string(errors.student).required(errors.student),
  grade: yup.string(errors.grade).required(errors.grade),
  program: yup.array().of(yup.string()).required(errors.program)
});
