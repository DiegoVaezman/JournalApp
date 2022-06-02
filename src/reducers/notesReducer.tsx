import { types } from "../types/types";

export interface NotesState {
  notes: Array<Note>;
  active: Note | null;
}

export interface Note {
  id: string;
  title: string;
  body: string;
  imageUrl?: string;
  date: number;
}

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state: NotesState = initialState, action: any) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: action.payload,
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
