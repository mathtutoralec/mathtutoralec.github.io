import { useState } from "react";

export const useFormHandlers = (form, setForm) => {
  const [loading, setLoading] = useState(false);

  const handleDateChange = (name, moment) => {
    const e = { ...form };
    e[name] = moment;
    setForm(e);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    const e = { ...form };
    e[name] = value;
    setForm(e);
  };

  const handleCoordinatesChange = event => {
    const { name, value } = event.target;
    const [field, type] = name.split(".");
    const index = type === "lon" ? 0 : 1;
    const e = { ...form };
    e[field].coordinates[index] = value;
    setForm(e);
  };

  const handleSelectChange = (opts, name) => {
    const values = Array.isArray(opts) ? opts.map(o => o.value) : opts.value;
    const e = { ...form };
    e[name] = values;
    setForm(e);
  };

  const handleNumberChange = event => {
    const { name, value } = event.target;
    const e = { ...form };
    e[name] = +value;
    setForm(e);
  };

  const handleBoolChange = event => {
    let { name, value } = event.target;
    const e = { ...form };
    e[name] = value === "true"; // Convert to bool
    setForm(e);
  };

  return {
    handleChange,
    handleDateChange,
    handleCoordinatesChange,
    handleSelectChange,
    handleNumberChange,
    handleBoolChange,
    loading,
  };
};

export default useFormHandlers;
