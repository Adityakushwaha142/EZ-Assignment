import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const url = "http://3.228.97.110:9000/api";
  const initialValues = { email: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);

    // The TESTING API is not working that's why I made the Email check mannually in Form validation

    // try {
    //   const response = await Axios.post(url, {
    //     email: formValue.email,
    //   });
    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }

    if (Object.keys(formError).length == 0 && isSubmit) {
      setFormValue({ ...formValue, email: "" });
      setIsSubmit(false);
    }
  };

  const validate = (values) => {
    // Email Validation

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pattern = /\@ez\.works$/i;

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (pattern.test(values.email)) {
      errors.email = "You cannot use EZ EMail ID";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  return (
    <div className="form_fill">
      {Object.keys(formError).length == 0 && isSubmit && <p>Form Submitted</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="fname"
          name="email"
          value={formValue.email}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <button>Contact Me</button>
      </form>
      <p>{formError.email}</p>
    </div>
  );
};

export default Form;
