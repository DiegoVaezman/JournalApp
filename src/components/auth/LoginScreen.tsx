import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  startLoginEmailPassword,
  startGoogleLogin,
} from "../../actions/auth";
import { setError, removeError } from "../../actions/ui";
// import { AppDispatch } from "../../store/store";
import { uiState } from "../../reducers/uiReducer";

export const LoginScreen = () => {
  const { msgError, loading } = useSelector(
    (state: any) => state.ui as uiState
  );
  const dispatch: any = useDispatch();
  const { onChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (email.trim().length === 0) {
      dispatch(setError("Email is required"));
      return false;
    }
    if (password.trim().length === 0) {
      dispatch(setError("Password is required"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(value) => onChange(value.target.value, "email")}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(value) => onChange(value.target.value, "password")}
        />
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth__social-netsworks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          to="/auth/register"
          className="link"
          onClick={() => dispatch(removeError())}
        >
          Create new account
        </Link>
      </form>
    </>
  );
};
