import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/NotesContext';

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
