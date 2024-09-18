import { FormProvider, useForm } from 'react-hook-form'
import EntityFormFooter from '../components/form/EntityFormFooter'
import ContactMeCreateForm from '../components/form/ContactMeCreateForm';
import { ContactCreateSchema } from '../components/form/ContactConstants';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"
import { Box } from '@mui/material';

function ContactForm( {setError, setSent}) {
  const { handleSubmit, control, reset} = useForm({resolver: yupResolver(ContactCreateSchema), mode: "onBlur"})

  const onSave = async (data) => {
    try {const response = await axios.post('https://hook.us2.make.com/1l246qpew77l8nop2g48xaib9uj07gu8', data)
    if (response.data === 'Accepted') {
      setSent(true)
    } }
    catch (error) {
      setError(true)
    }
    
  }

  const handleDelete = () => reset()

  return (
    <Box>
      <FormProvider control={control}>
        <ContactMeCreateForm />
      </FormProvider>
      <EntityFormFooter
          noSave
          noCard
          handleDelete={handleDelete}
          extraButtons={[
            {
              label: "Send Messsage",
              variant: "contained",
              color: "primary",
              isPublic: true,
              startIcon: "basil:send-outline",
              onClick: handleSubmit(onSave)
            },
          ]}
        />
    </Box>
  )
}

export default ContactForm