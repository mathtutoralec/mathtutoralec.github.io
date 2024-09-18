import Form from "./form-layout/Form";
// components
import {
  NameField,
  EmailField,
  PhoneField,
  StudentNameField,
  GradeField,
  CourseField
} from "./RegistrationFields";
import RegistrationForm from "../../sections/registrationForm";
import { Component } from "react";

export const RegistrationCreateForm = props => {
  // Setting layout to sectioned results in error:
  // ResizeObserver loop completed with undelivered notifications
  // LastPass is trying to inject into the email field and failing
  const {
    sx,
    layout = "2col",
    typeOptions,
    orgOptions,
    readOnly,
    readOnlyType,
    readOnlyParent,
    nameIsUnique,
    nameIsUniqueLoading,
  } = props;

  const formData = {
    sections: [
      {
        title: "Registration Form",
        description: "Register for one of the after school programs.",
        fields: [
          {
            Component: NameField,
            props: { readOnly, isUnique: nameIsUnique, uniqueLoading: nameIsUniqueLoading },
          },
          { Component: EmailField, props: { readOnly } },
          { Component: PhoneField, props: { readOnly }},
          { Component: StudentNameField},
          { Component: GradeField},
          { Component: CourseField}
        ],
      },
    ],
  };

  return <Form formData={formData} layout={layout} sx={sx} />;
};

export default RegistrationCreateForm;
