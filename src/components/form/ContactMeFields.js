import React from "react";
import { RHFTextField } from "../hook-form";

export const NameField = props => {
    const { namePrefix, ...rest } = props;
    const name = namePrefix ? `${namePrefix}.name` : "name";
  
    return (
      <RHFTextField name={name} helperText="Your name" label="Name" required />
    );
  };

  export const EmailField = props => {
    const { namePrefix, ...rest } = props;
    const name = namePrefix ? `${namePrefix}.email` : "email";
  
    return (
      <RHFTextField
        name={name}
        helperText="Your main contact email"
        label="Email Address"
        required
        {...rest}
      />
    );
  };

export const SubjectField = props => {
  return (
    <RHFTextField
      name="subject"
      helperText="Your message subject"
      label="Subject"
      fullWidth
      />
  )
}

export const MessageField = props => {
  const { namePrefix, ...rest } = props;
  const name = namePrefix ? `${namePrefix}.message` : "message";

  return (
    <RHFTextField
        name={name}
        helperText="Enter your message here"
        label="Message"
        required
        fullWidth
        multiline
        minRows={5}
    />
  )
}