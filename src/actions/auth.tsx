import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { startLoading, finishLoading, setError } from "./ui";
import Swal from "sweetalert2";

export const startLoginEmailPassword = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }: any) => {
        console.log("user", user);
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err: any) => {
        console.log("err", err);
        dispatch(finishLoading());
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startRegisterWithEmailPasswordName = (
  email: string,
  password: string,
  name: string
) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user!.updateProfile({ displayName: name });
        dispatch(login(user!.uid, user!.displayName!));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user!.uid, user!.displayName || ""));
      });
  };
};

export const login = (uid: string, displayName: string) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch: any) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
