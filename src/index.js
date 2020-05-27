import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import NotesContext from './context/NotesContext';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import notesReducer from './reducers/notes';

import * as serviceWorker from './serviceWorker';

const NotesApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    notes && dispatch({ type: 'POPULATE_NOTES', notes });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <NotesList />
      <AddNote />
    </NotesContext.Provider>
  );
};

ReactDOM.render(<NotesApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
