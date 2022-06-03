import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesState } from "../../reducers/notesReducer";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active } = useSelector((state: any) => state.notes as NotesState);

  const { title, body, onChange } = useForm({
    title: active?.title,
    body: active?.title,
  });

  useEffect(() => {
    if (active) {
      onChange(active?.title, "title");
      onChange(active?.body, "body");
    }
  }, [active]);

  return (
    <div className="notes__main-content">
      <NotesAppBar date={active?.date} />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={(value) => onChange(value.target.value, "title")}
        />
        <textarea
          placeholder="What happened today?"
          className="notes__textarea"
          value={body}
          onChange={(value) => onChange(value.target.value, "body")}
        ></textarea>

        {active?.imageUrl && (
          <div className="notes__image">
            <img src={active?.imageUrl} alt="image" />
          </div>
        )}
      </div>
    </div>
  );
};
