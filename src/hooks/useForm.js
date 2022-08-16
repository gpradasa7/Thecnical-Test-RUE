import { useState } from "react";
import DeleteData from "../helpers/DeleteData";
import { apiKey } from "../helpers/urls";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const reset = () => {
    setForm(initialState);
  };

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return [form, handleInputChange, reset];
};

export default useForm;
