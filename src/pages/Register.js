import { useEffect, useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

const handleChange = (e) => {
  console.log(e.target);
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Register</h3>

        {/* name field */}

        <FormRow
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          className="form-input"
        />
        <FormRow
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          className="form-input"
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          className="form-input"
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
