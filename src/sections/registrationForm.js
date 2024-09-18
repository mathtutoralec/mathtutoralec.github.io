import { FormProvider, useForm } from 'react-hook-form'
import EntityFormFooter from '../components/form/EntityFormFooter'
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"
import RegistrationCreateForm from '../components/form/RegistrationCreateForm';
import { RegistrationSchema } from '../components/form/RegistrationConstants';

function RegistrationForm( {setError, setSent}) {
  const { handleSubmit, control, reset} = useForm({resolver: yupResolver(RegistrationSchema), mode: "onBlur"})

  const onSave = async (data) => {
    try {const response = await axios.post('https://hook.us2.make.com/8bq4s670ikxsu7xj3cs7pn8w257il4sg', data)
    if (response.data === 'Accepted') {
      setSent(true)
    } }
    catch (error) {
      setError(true)
    }
  }

  const handleDelete = () => reset()

  return (
    <div>
      <FormProvider control={control}>
        <RegistrationCreateForm />
      </FormProvider>
      <EntityFormFooter
          noSave
          noCard
          handleDelete={handleDelete}
          extraButtons={[
            {
              label: "Register",
              variant: "contained",
              color: "primary",
              isPublic: true,
              startIcon: "basil:file-user-outline",
              onClick: handleSubmit(onSave)
            },
          ]}
        />
    </div>
  )
}

export default RegistrationForm