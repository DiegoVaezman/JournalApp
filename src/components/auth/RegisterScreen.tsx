import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state: any) => state.ui);

  const { name, email, password, password2, onChange } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleRegisterSubmit = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(
        startRegisterWithEmailPasswordName(email, password, name) as any
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is invalid"));
      return false;
    }
    if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegisterSubmit}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={(e) => onChange(e.target.value, "name")}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(e) => onChange(e.target.value, "email")}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e.target.value, "password")}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password"
          value={password2}
          onChange={(e) => onChange(e.target.value, "password2")}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
