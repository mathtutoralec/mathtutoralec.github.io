import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../store/api/user-management.api";
import { handleError } from "../utils/notifications";
import { initOrganisation, organisationCreateSchema } from "../components/form/OrganisationConstants";
import { RHFDatePicker, RHFTextField } from "../components/hook-form";
import { camelCaseToProperCase } from "utils/common";
import cloneDeep from "lodash/cloneDeep";
import useDebouncedValue from "hooks/useDebouncedValue";

// ----------------------------------------------------------------------
// WORKFLOW FUNCTIONS
// ----------------------------------------------------------------------

const emptyFormData = { sections: [] };

const getOptions = items => {
  if (!items) return [];
  return items
    .map(item => {
      if (item.name === "root") return null;
      return { value: item.id, label: item?.label || item?.name };
    })
    .filter(option => !!option);
};

const fieldComponents = {
  string: RHFTextField,
  id: RHFTextField,
  number: RHFTextField,
  date: RHFDatePicker,
};

const buildFieldProps = input => {
  const { label, name, type } = input;
  const formattedLabel = camelCaseToProperCase(label);
  return {
    name,
    label: formattedLabel,
    type: type === "number" ? type : undefined,
  };
};

const buildField = input => {
  const { type } = input;
  const FieldComponent = fieldComponents[type];
  const FieldProps = buildFieldProps(input);
  return {
    Component: props => <FieldComponent {...props} />,
    props: FieldProps,
  };
};

const buildTypeSpecificFields = inputs => {
  if (!inputs || !inputs?.length) return emptyFormData;
  const typeInputs = inputs.filter(
    input => !["id", "name", "parent", "email"].includes(input.name)
  );
  if (!typeInputs?.length) return emptyFormData;
  return {
    sections: [
      {
        title: "Organisation Type Fields",
        fields: typeInputs.map(input => buildField(input)),
      },
    ],
  };
};

const validateTypeField = (data, input) => {
  const { type, name } = input;
  const label = camelCaseToProperCase(input?.label);
  if (!data[name]) throw Error(`${label} is a required field.`);
  // add validation for each field type once workflow is signed off
};

const validateTypeFields = (data, inputs) => {
  inputs.forEach(input => {
    if (!["id", "name", "parent", "email"].includes(input.name)) validateTypeField(data, input);
  });
};

// ----------------------------------------------------------------------

const useCreateOrganisation = props => {
  const { init = initOrganisation, redirect = false } = props;
  const { push } = useNavigate();
  //STATE
  const [typeFields, setTypeFields] = useState(emptyFormData);

  //FORM
  const form = useForm({
    defaultValues: init,
    resolver: yupResolver(organisationCreateSchema),
    mode: "all",
  });
  const {
    handleSubmit,
    trigger,
    watch,
    formState: { isValid, errors },
  } = form;
  const typeId = watch("type");

  //API
  const [create, { isLoading: isSaving }] = API.useCreateUserManagementOrganisationMutation();
  const { data: typesData, isFetching: isFetchingTypes } =
    API.useListUserManagementOrganisationTypesQuery({ limit: 1000 });
  const { data: type, isFetching: isFetchingType } = API.useReadUserManagementOrganisationTypeQuery(
    { id: typeId },
    { skip: !typeId }
  );
  const { data: orgsData, isFetching: isFetchingOrgs } =
    API.useListUserManagementOrganisationsQuery({ limit: 1000 });

  const name = watch("name");
  const debouncedName = useDebouncedValue(name);

  const { data: uniqueCheck, isFetching: nameIsUniqueLoading } =
    API.useCheckUserManagementOrganisationNameUniqueQuery(
      { name: debouncedName },
      { skip: !debouncedName }
    );
  const nameHasBeenChecked = debouncedName === name;
  const nameIsUnique = !uniqueCheck || (!nameHasBeenChecked ? undefined : !uniqueCheck?.exists);

  const { organisationtypes: types } = typesData || {};
  const { organisationalentities: orgs } = orgsData || {};

  const typeOptions = getOptions(types);
  const orgOptions = getOptions(orgs);

  //STATUS
  const isLoading = isFetchingTypes || isFetchingOrgs;
  const isBusy = isSaving || isFetchingType;

  //HANDLERS
  useEffect(() => {
    if (!type || !type?.template?.inputs) return;
    setTypeFields(buildTypeSpecificFields(type.template.inputs));
  }, [type]);

  const transformOnSave = data => {
    const body = cloneDeep(data);
    if (!type?.template?.inputs) return body;
    type.template.inputs.forEach(input => {
      if (input.type === "number") body[input.name] = parseFloat(body[input.name]);
    });
    return body;
  };

  const save = async data => {
    const body = transformOnSave(data);
    if (type?.template?.inputs) validateTypeFields(body, type.template.inputs);
    const response = await create({ body }).unwrap();
    if (redirect && response?.id) push(`/user-management/organisation/edit/${response.id}`);
  };

  const errorCallback = err => {
    console.log(err);
    handleError("Error during Organisation creation. Please check the form and try again");
    trigger();
  };

  const handleSave = handleSubmit(save, errorCallback);

  const saveDisabled = !isValid || isBusy || !nameIsUnique;

  return {
    form,
    isLoading,
    isBusy,
    formFooter: {
      isUpdating: isSaving,
      saveDisabled,
      handleSave,
    },
    orgOptions,
    typeOptions,
    typeFields,
    nameIsUnique,
    nameIsUniqueLoading,
  };
};

export default useCreateOrganisation;
