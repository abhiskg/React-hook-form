import React from "react";
import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" ref={register()} />

        <label>Date of birth</label>
        <input
          type="date"
          name="bdate"
          min="2010-01-01"
          placeholder="2010-01-01"
          ref={register()}
        />

        <label>Select Gender</label>
        <select name="gender" ref={register()}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <label>Email</label>
        <input name="email" ref={register()} />

        <label>Password</label>
        <input type="password" name="password" ref={register()} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
