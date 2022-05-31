// {
//     uid: ejnvkjabvkbav,
//     name: 'Fernando'
// }

import { types } from "../types/types";

export interface AuthState {
  uid: string | null;
  name: string | null;
}

const initialState = {
  uid: null,
  name: null,
};

export const authReducer = (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {
        uid: null,
        name: null,
      };

    default:
      return state;
  }
};
