import * as yup from "yup";
import { getMongoIdSchema } from "../../utils/schema";

export const initOrganisation = {
  id: "",
  name: "",
  type: "",
  parent: "",
};

const errors = {
  name: "Name is a required field",
  email: "The email provided is not valid",
};
export const organisationCreateSchema = yup.object({
  id: getMongoIdSchema("id"),
  parent: getMongoIdSchema("parent"),
  name: yup.string(errors.name).required(errors.name),
  email: yup.string(errors.email).email(errors.email),
});
export const organisationUpdateSchema = yup.object({
  name: yup.string(errors.name).required(errors.name),
  email: yup.string(errors.email).email(errors.email),
});

export const isValidCategoryName = str => {
  if (typeof str !== "string") return false;
  if (str.length < 3) return false;
  return true;
};

export const isValidFolderName = str => {
  if (typeof str !== "string") return false;
  if (str.length < 3) return false;
  return true;
};
