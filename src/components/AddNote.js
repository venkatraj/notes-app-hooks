import React, { useState, useContext } from 'react';
import NotesContext from '../context/NotesContext';

const AddNote = () => {
  console.log('AddNote');
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', note: { title, body } });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={addNote}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
