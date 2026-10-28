# Experiment 7 - Notes App using React.js

A single-page application made with React (Vite) for Web Development Lab (Week 7).
Users can view, add, update and delete notes. Notes are saved in the browser
(localStorage) so they stay after refreshing the page.

## Features
- Add a note with a title and text (empty notes are not allowed)
- View all notes
- Edit a note and save or cancel the changes
- Delete a note

## React concepts used
- Components (`App`, `NoteForm`, `NoteItem`)
- Props to send data and functions to child components
- `useState` for notes, form fields and edit mode
- `useEffect` to save notes in localStorage
- Rendering lists with `map` and keys

## Run on your computer
```
npm install
npm run dev
```
Then open the link shown in the terminal (needs Node.js).

## Files
- `src/App.jsx` - main component with add, update and delete functions
- `src/components/NoteForm.jsx` - form to add a note
- `src/components/NoteItem.jsx` - one note (view and edit mode)
- `src/index.css` - styling
- `.github/workflows/deploy.yml` - publishes the site on GitHub Pages

## Live site
https://tanavs1.github.io/exp7-react-notes/
