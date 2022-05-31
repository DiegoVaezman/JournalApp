import { types } from "../types/types";

export interface uiState {
  loading: boolean;
  msgError: string | null;
}

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state: uiState = initialState, action: any) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
