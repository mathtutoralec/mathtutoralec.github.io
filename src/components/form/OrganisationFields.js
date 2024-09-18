import React from "react";
import { RHFSelect, RHFTextField, RHFUniqueTextField } from "../hook-form";

export const IDField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.id` : "id";

  return (
    <RHFTextField
      name={name}
      helperText="The unique ID of the organisation. Leave blank to set automatically"
      label="ID"
      {...rest}
    />
  );
};

export const TypeField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.type` : "type";

  return (
    <RHFTextField
      name={name}
      helperText="The organisation's type"
      label="Organisation Type"
      {...rest}
    />
  );
};

export const TypeCreateField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.type` : "type";

  return (
    <RHFSelect
      name={name}
      helperText="The organisation's type"
      label="Organisation Type"
      {...rest}
    />
  );
};

export const ParentField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.parent` : "parent";

  return (
    <RHFTextField
      name={name}
      helperText="The parent organisation ID or null for root organisations"
      label="Parent ID"
      {...rest}
    />
  );
};

export const ParentCreateField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.parent` : "parent";
  return (
    <RHFSelect
      name={name}
      helperText="The parent organisation ID or null for root organisations"
      label="Parent ID"
      {...rest}
    />
  );
};

export const NameField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.name` : "name";

  return (
    <RHFUniqueTextField name={name} helperText="The organisation's name" label="Name" {...rest} />
  );
};

export const EmailField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.email` : "email";

  return (
    <RHFTextField
      name={name}
      helperText="The organisation's main contact email"
      label="Email Address"
      required
      {...rest}
    />
  );
};

