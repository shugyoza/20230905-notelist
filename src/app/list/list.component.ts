import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  @Output() showNote = new EventEmitter();
  @Output() addNote = new EventEmitter();
  @Output() deleteNote = new EventEmitter();
  @Input() notes: Note[] = [];
}
