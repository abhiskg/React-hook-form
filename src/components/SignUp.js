import React from "react";
import "./SignUp.css";

function SignUp() {
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" name="name" />

        <label>Date of birth</label>
        <input type="date" min="2010-01-01" placeholder="2010-01-01" />

        <label>Select Gender</label>
        <select name="gender">
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <label>Email</label>
        <input name="email" />

        <label>Password</label>
        <input type="password" name="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
