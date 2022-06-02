import React from "react";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";
import { NotesState } from "../../reducers/notesReducer";

export const JournalScreen = () => {
  const { active } = useSelector((state: any) => state.notes as NotesState);

  return (
    <div className="journal_main-content">
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};
