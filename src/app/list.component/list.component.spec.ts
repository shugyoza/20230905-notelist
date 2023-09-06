import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mock } from '../data/notes.mock';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.notes = mock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud emit showNote event on click', () => {
    spyOn(component.showNote, 'emit');

    const firstIndex = 0;
    const firstNoteTitle = fixture.nativeElement.querySelector('.show-item');
    firstNoteTitle.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.showNote.emit).toHaveBeenCalledWith(firstIndex);
  });

  it('shoud emit addNote event on click', () => {
    spyOn(component.addNote, 'emit');

    const addNoteButton = fixture.nativeElement.querySelector('.add-item');
    addNoteButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.addNote.emit).toHaveBeenCalledTimes(1);
  });

  it('shoud emit addNote event on click', () => {
    spyOn(component.addNote, 'emit');

    const addNoteButton = fixture.nativeElement.querySelector('.add-item');
    addNoteButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.addNote.emit).toHaveBeenCalledTimes(1);
  });

  it('shoud emit deleteNote event on click', () => {
    spyOn(component.deleteNote, 'emit');

    const firstIndex = 0;
    const firstXButton = fixture.nativeElement.querySelector('.delete-item');
    firstXButton.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.deleteNote.emit).toHaveBeenCalledWith(firstIndex);
  });
});
