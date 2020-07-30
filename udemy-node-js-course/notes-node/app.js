// console.log('Starting app..');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');





// console.log("process.argv: ", process.argv);
// console.log("yargs.argv: ", yargs.argv);
const titleOptinos = {
  describe: 'Title of my note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Body of my note',
  demand: true,
  alias: 'b'
}
var arg = yargs
  .command('add', 'Add new Note', {
    title: titleOptinos,
    body: bodyOptions
  })
  .command('list', 'List All Notes')
  .command('read', 'Read a specific note', {
    title: titleOptinos
  })
  .command('remove','Removes a specific note',{
    title: titleOptinos
  })
  .help()
  .argv;
var main_cmd = yargs.argv._[0];





if (main_cmd == 'add') {
  var note = notes.addNote(arg.title, arg.body);
  if (note) {
    console.log('Note Created:\n-------------');
    notes.logNote(note);
  } else {
    console.log(`The Title: ${arg.title} has already been taken.\nNote not added.`);
  }
} else if (main_cmd == 'remove') {
  var removedNote = notes.removeNote(arg.title);
  var messege = removedNote ? 'Note was remove.' : 'Note was not found.';
  console.log(messege);
} else if (main_cmd == 'list') {
  var allNotes = notes.getAllNotes();
  for (var n in allNotes) {
    if (allNotes.hasOwnProperty(n)) {
      console.log(`${allNotes[n].title}\n${allNotes[n].body}`);
    }
  }
} else if (main_cmd == 'read') {
  var note = notes.getNote(arg.title);
  if (note.length !== 0) {
    notes.logNote(note[0]);
  } else {
    console.log('Note was not found');
  }
}
