import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Note } from '../data/notes.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less'],
})
export class NoteComponent implements OnChanges {
  @Input() note: Note | null = null;
  @Input() title!: FormControl;
  @Input() description!: FormControl;
  @Input() notesLen: number = 0;

  @Output() revertInput = new EventEmitter();
  @Output() saveInput = new EventEmitter();

  public textAreaHeight = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // we can set text area height dynamically with min-height
    const minHeight = 12; // em
    if (changes.hasOwnProperty('notesLen')) {
      this.textAreaHeight = minHeight; // Math.max(minHeight, this.notesLen * 3);
    }
  }
}
