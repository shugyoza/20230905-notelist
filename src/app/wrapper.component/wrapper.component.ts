import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Note } from '../data/notes.interface';
import { mock } from '../data/notes.mock';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.less'],
})
export class WrapperComponent implements OnInit {
  public notes: Note[] = [];
  public note: Note | null = null;
  public isNewNote: boolean = true;

  public title = new FormControl({ value: '', disabled: true });
  public description = new FormControl({ value: '', disabled: true });

  ngOnInit() {
    this.notes = mock;
  }

  public showNote(index: number): void {
    // grab the note from list of notes at index
    this.note = this.notes[index];

    // set the flag that this is not a new note
    this.isNewNote = false;

    // enable the input fields
    this.title.enable();
    this.description.enable();

    // prefill the input fields with values from selected note
    this.title.setValue(this.note.title);
    this.description.setValue(this.note.description);
  }

  public save(): void {
    // if any of the inputs are empty, don't do anything
    if (!this.title.value || !this.description.value) {
      return;
    }

    // if it's not a new note, update the existing note
    if (!this.isNewNote) {
      this.notes.find((doc) => {
        if (doc.id === this.note?.id) {
          doc.title = this.title.value || '';
          doc.description = this.description.value || '';
        }
      });
    }

    // if it's a new note, add it to the notes
    else if (this.isNewNote) {
      this.notes.push({
        id: new Date().toString(),
        title: this.title.value || '',
        description: this.description.value || '',
      });
    }

    // reset input fields
    this.title.reset();
    this.description.reset();
    // disable input fields
    this.title.disable();
    this.description.disable();
    // disable the revert and save buttons
    this.note = null;
    // reset isNewNote
    this.isNewNote = true;
  }

  public revert(): void {
    if (!this.note) {
      return;
    }

    this.title.setValue(this.note.title);
    this.description.setValue(this.note.description);
  }

  public addNote(): void {
    // clear up the inputs
    this.title.setValue('');
    this.description.setValue('');

    // enable the input fields
    this.title.enable();
    this.description.enable();

    // flag as a new note
    this.isNewNote = true;

    // define the default blank note to be updated
    this.note = {
      id: new Date().toString(),
      title: '',
      description: '',
    };
  }

  public deleteNote(index: number): void {
    this.notes = [
      ...this.notes.slice(0, index),
      ...this.notes.slice(index + 1),
    ];
  }
}
