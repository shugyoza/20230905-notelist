import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../data/notes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  @Input() notes: Note[] = [];

  @Output() showNote = new EventEmitter();
  @Output() addNote = new EventEmitter();
  @Output() deleteNote = new EventEmitter();
}
