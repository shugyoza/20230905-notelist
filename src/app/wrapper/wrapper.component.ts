import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

const mock = [
  {
    id: '1',
    title: 'Title A',
    description: 'Description A',
  },
  {
    id: '2',
    title: 'Title b',
    description: 'Description B',
  },
  {
    id: '3',
    title: 'Title C',
    description: 'Description C',
  },
  {
    id: '4',
    title: 'Title D',
    description: 'Description D',
  },
];

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.less'],
})
export class WrapperComponent {
  public notes: Note[] = mock;
  public note!: Note;

  public title = new FormControl({ value: '', disabled: true });
  public description = new FormControl({ value: '', disabled: true });

  private isNewNote: boolean = true;

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
        if (doc.id === this.note.id) {
          doc.title = this.title.value || '';
          doc.description = this.description.value || '';
        }
      });
      return;
    }

    // if it's a new note, add it to the notes
    this.notes.push({
      id: new Date().toString(),
      title: this.title.value || '',
      description: this.description.value || '',
    });

    // reset the input fields
    this.title.reset();
    this.description.reset();
  }

  public revert(): void {
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
}

export interface Note {
  id: string;
  title: string;
  description: string;
}
