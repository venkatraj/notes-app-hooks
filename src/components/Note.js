import React, { useContext } from 'react';
import NotesContext from '../context/NotesContext';
import useMousePosition from '../hooks/useMousePosition';

const Note = (props) => {
  const { dispatch } = useContext(NotesContext);
  const { note } = props;
  const position = useMousePosition();

  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        Remove
      </button>
    </div>
  );
};

export default Note;
