import { useFormik } from "formik";
import React from "react";

function Login() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { name: "", password: "" },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">email</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
