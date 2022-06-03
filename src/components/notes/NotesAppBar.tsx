import React from "react";
import { useSelector } from "react-redux";
import { NotesState } from "../../reducers/notesReducer";
import moment from "moment";

interface Props {
  date: number | undefined;
}
export const NotesAppBar = ({ date }: Props) => {
  const noteDate = moment(date).format("dddd, MMMM Do YYYY");
  return (
    <div className="notes__appbar">
      <span>{noteDate}</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};
