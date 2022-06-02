import { db } from "../firebase/firebaseConfig";
import { Note } from "../reducers/notesReducer";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activateNote({ id: doc.id, ...newNote }));
  };
};

export const activateNote = (note: Note) => ({
  type: types.notesActive,
  payload: {
    ...note,
  },
});

export const startLoadNotes = (uid: string) => {
  return async (dispatch: any) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes: Note[] = [];

    notesSnap.forEach((doc) => {
      //@ts-ignore
      notes.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes: Note[]) => ({
  type: types.notesLoad,
  payload: notes,
});
