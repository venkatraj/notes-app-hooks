import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext';

const Note = (props) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = props;

  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.body}</p>
      <button
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        Remove
      </button>
    </div>
  );
};

export default Note;
