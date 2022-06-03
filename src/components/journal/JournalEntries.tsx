import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";
import { notesReducer, NotesState } from "../../reducers/notesReducer";

export const JournalEntries = () => {
  const { notes } = useSelector((state: any) => state.notes as NotesState);

  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournalEntry key={note.id} note={note} />
      ))}
    </div>
  );
};
