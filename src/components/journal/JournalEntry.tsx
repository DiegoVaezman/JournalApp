import React from "react";
import { Note } from "../../reducers/notesReducer";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activateNote } from "../../actions/notes";

interface Props {
  note: Note;
}

export const JournalEntry = ({ note }: Props) => {
  const noteDate = moment(note.date);
  const dispatch: any = useDispatch();

  const handleEntryClick = () => {
    dispatch(activateNote(note));
  };

  return (
    <div className="journal__entry" onClick={handleEntryClick}>
      {note.imageUrl && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${note.imageUrl})`,
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{note.title}</p>
        <p className="journal__entry-content">{note.body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do") + " " + noteDate.format("MMM")}</h4>
      </div>
    </div>
  );
};
