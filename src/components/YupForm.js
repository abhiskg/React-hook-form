import React from "react";
import { useForm } from "react-hook-form";
import "./YupForm.css";

function YupForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values, e) => {
    console.log("Form data", values);
    e.target.reset();
  };
  return (
    <div className="yupForm">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && <p>Required</p>}

        <label>Date of birth</label>
        <input
          name="bdate"
          type="date"
          min="2010-01-01"
          placeholder="2010-01-01"
          ref={register({ required: true })}
        />
        {errors.bdate && <p>Required</p>}

        <label>Select Gender</label>
        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>Required</p>}

        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <p>Required</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password?.type === "required" && <p>Required</p>}
        {errors.password?.type === "minLength" && (
          <p>Password should be minimum of 6 letters</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YupForm;
