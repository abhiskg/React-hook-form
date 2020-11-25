import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./YupForm.css";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  bdate: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

function YupForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values, e) => {
    console.log("Form data", values);
    e.target.reset();
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" ref={register} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Date of birth</label>
        <input
          name="bdate"
          type="date"
          min="2010-01-01"
          placeholder="2010-01-01"
          ref={register}
        />
        {errors.bdate && <p>{errors.bdate.message}</p>}

        <label>Select Gender</label>
        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>{errors.gebder.message}</p>}

        <label>Email</label>
        <input name="email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" name="password" ref={register} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YupForm;
