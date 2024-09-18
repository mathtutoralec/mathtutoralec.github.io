import React from "react";
import { RHFTextField, RHFSelect, RHFPhone, RHFRadioGroup, RHFMultiCheckbox, RHFCheckbox } from "../hook-form";

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

  export const PhoneField = () => {
    return (
        <RHFPhone 
            name="phone"
            defaultCountry="CA"
            helperText="Your best contact number"
            label="Phone Number"
            required
        />
    )
  } 

export const StudentNameField = props => {
  return (
    <RHFTextField
      name="student"
      helperText="Your chids name"
      label="Student Name"
      required
      />
  )
}

export const GradeField = props => {
    const gradeOptions = []
    for (let i=3; i<8; i++) {
        gradeOptions.push({
            value: String(i),
            label: "Grade " +String(i)
        })
    }
    
    return (
      <RHFSelect
        name="grade"
        helperText="Your childs grade"
        label="Grade"
        options={gradeOptions}
        required
        />
    )
  }

export const CourseField = () => {
    return (
        <RHFMultiCheckbox
        name="program"
        label="Select the program you wish to register for"
        options={[
            { value: 'math', label: 'Math Club' },
            { value: 'coding', label: 'Coding Club' },
        ]}
        row
        spacing={2}
        helperText="Choose one or more options."
        />
    )
}