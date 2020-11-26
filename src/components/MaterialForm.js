import { Button, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import "./MaterialForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: "18px",
      width: "100%",
      display: "block",
    },
    "& .MuiButton-root": {
      background: "#9cf4e1",
      color: "white",
      letterSpacing: "6px",
      width: "100%",
      padding: "10px 0",
      marginTop: "20px",
    },
    "& .MuiButton-root:hover": {
      background: "#80f0d8",
    },
  },
}));

const genders = [
  {
    value: "male",
    label: "male",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "other",
    label: "other",
  },
];

function MaterialForm() {
  const classes = useStyles();
  const { control, register, handleSubmit, errors } = useForm();

  const onSubmit = (values, e) => {
    console.log("Form data", values);
    e.target.reset();
  };
  return (
    <div className="materialForm">
      <h1>Sign Up</h1>
      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        noValidate
      >
        <TextField
          label="Full Name"
          variant="outlined"
          name="name"
          inputRef={register({ required: true })}
        />
        {errors.name && <p>Required</p>}

        <TextField
          label="Date of Birth"
          type="date"
          name="bdate"
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register({ required: true })}
        />
        {errors.bdate && <p>Required</p>}

        <Controller
          as={TextField}
          label="Gender"
          name="gender"
          defaultValue="male"
          select
          variant="outlined"
          control={control}
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Controller>

        <TextField
          label="Email"
          name="email"
          variant="outlined"
          inputRef={register({ required: true })}
        />
        {errors.email && <p>Required</p>}

        <TextField
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          inputRef={register({ required: true, minLength: 6 })}
        />
        {errors.password?.type === "required" && <p>Required</p>}
        {errors.password?.type === "minLength" && (
          <p>Password should be minimum of 6 letters</p>
        )}

        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default MaterialForm;
