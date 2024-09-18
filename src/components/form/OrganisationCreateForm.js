import Form from "./form-layout/Form";
// components
import {
  IDField,
  ParentCreateField,
  NameField,
  TypeCreateField,
  EmailField,
} from "./OrganisationFields";

export const OrganisationCreateForm = props => {
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
        title: "Create Organisation",
        description: "Create a new organisation",
        fields: [
          { Component: IDField, props: { readOnly } },
          {
            Component: TypeCreateField,
            props: { readOnly: readOnly || readOnlyType, options: typeOptions },
          },
          {
            Component: ParentCreateField,
            props: { readOnly: readOnly || readOnlyParent, options: orgOptions },
          },
          {
            Component: NameField,
            props: { readOnly, isUnique: nameIsUnique, uniqueLoading: nameIsUniqueLoading },
          },
          { Component: EmailField, props: { readOnly } },
        ],
      },
    ],
  };

  return <Form formData={formData} layout={layout} sx={sx} />;
};

export default OrganisationCreateForm;
