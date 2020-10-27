// console.log("Notes executed\n");
const fs = require('fs');

function fetchNotes() {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

function addNote(title, body) {

  var note = {
    title,
    body
  };

  var notes = fetchNotes();
  var duplicatesNotes = notes.filter((note) => note.title === title); //ES6 Arrow function inside de filter function is use here

  if (duplicatesNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }



  // var dup = notes.filter(function(note){
  //   return note.title===title;
  // });

  //   var duplicatesNotes = notes.filter((note) => {
  //   return note.title===title
  // });


}

function removeNote(title) {
  var notes = fetchNotes();
  var notes_with_deleted_note = notes.filter((note) => note.title !== title);
  saveNotes(notes_with_deleted_note);
  return notes.length !== notes_with_deleted_note.length;
}

function getNote(title) {
  var  notes = fetchNotes();
  var theNoteYouWant = notes.filter((note) => note.title === title);
  return theNoteYouWant;
}

function logNote(note){
  debugger;
  console.log(`${note.title}`);
  console.log(`${note.body}`);
}

function getAllNotes() {
  return fetchNotes();

}


module.exports = {
  addNote,
  getAllNotes,
  removeNote,
  getNote,
  logNote
};
