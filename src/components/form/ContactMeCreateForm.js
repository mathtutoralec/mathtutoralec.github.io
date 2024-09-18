import Form from "./form-layout/Form";
// components
import {
  NameField,
  EmailField,
  MessageField,
  SubjectField
} from "./ContactMeFields";

export const ContactMeCreateForm = props => {
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
        title: "Contact Me",
        description: "Send me a message!",
        fields: [
          {
            Component: NameField,
            props: { readOnly, isUnique: nameIsUnique, uniqueLoading: nameIsUniqueLoading },
          },
          { Component: EmailField, props: { readOnly } },
          { Component: SubjectField, fullWidth: true},
          { Component: MessageField, fullWidth: true}
        ],
      },
    ],
  };

  return <Form formData={formData} layout={layout} sx={sx} />;
};

export default ContactMeCreateForm;
