const fs = require('fs');

var originalNote = {
  title: 'The Title',
  body: 'The body'
}
var originalNotesString =  JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNotesString);

var noteString = fs.readFileSync('notes.json');

var noteStringJSON = JSON.parse(noteString);

console.log(noteStringJSON.title);
