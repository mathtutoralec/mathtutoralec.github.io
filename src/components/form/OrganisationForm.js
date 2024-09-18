import Form from "components/form/form-layout/Form";
//@mui
import Card from "@mui/material/Card";
// components
import { IDField, TypeField, ParentField, NameField, EmailField } from "./OrganisationFields";

export const OrganisationForm = props => {
  const { sx, layout = "sectioned", readOnly, nameIsUnique, nameIsUniqueLoading } = props;

  const formData = {
    sections: [
      {
        title: "Update Organisation",
        description: "Update this organisation",
        fields: [
          { Component: IDField, props: { readOnly: true } },
          { Component: TypeField, props: { readOnly: true } },
          { Component: ParentField, props: { readOnly: true } },
          {
            Component: NameField,
            props: { readOnly, isUnique: nameIsUnique, uniqueLoading: nameIsUniqueLoading },
          },
          { Component: EmailField, props: { readOnly } },
        ],
      },
    ],
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Form formData={formData} layout={layout} sx={sx} />
    </Card>
  );
};

export default OrganisationForm;

