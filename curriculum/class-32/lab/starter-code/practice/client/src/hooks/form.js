import { useState } from 'react';

export default function useForm(onSubmit) {
  const [values, setValues] = useState({});

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return [
    values,
    handleChange,
    handleSubmit,
  ];
}