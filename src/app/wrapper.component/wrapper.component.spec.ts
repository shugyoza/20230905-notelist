import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WrapperComponent } from './wrapper.component';
import { mock } from '../data/notes.mock';

describe('WrapperComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    component.notes = mock;

    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set a note from the notes at index, set isNewNote to false, enable input fields, and prefill them with proper values when .showNote(index) is being called', () => {
    const index = 2;

    component.showNote(index);
    fixture.detectChanges();

    expect(component.note).toEqual(component.notes[index]);
    expect(component.isNewNote).toEqual(false);

    expect(component.title.disabled).toEqual(false);
    expect(component.description.disabled).toEqual(false);

    if (component.note) {
      expect(component.title.value).toEqual(component.note.title);
      expect(component.description.value).toEqual(component.note.description);
    }
  });

  it('should reset everything in the form and modified the existing document within the notes when .save() is being called after .showNote(index)', () => {
    const index = 2;

    component.showNote(index);
    fixture.detectChanges();

    const newTitle = 'new title';
    const newDescription = 'new description';

    component.title.setValue(newTitle);
    component.description.setValue(newDescription);
    component.save();
    fixture.detectChanges();

    expect(component.notes[index].title).toEqual(newTitle);
    expect(component.notes[index].description).toEqual(newDescription);

    expect(component.title.value).toBeFalsy();
    expect(component.description.value).toBeFalsy();

    expect(component.title.disabled).toEqual(true);
    expect(component.description.disabled).toEqual(true);

    expect(component.note).toEqual(null);
    expect(component.isNewNote).toEqual(true);
  });

  it('should not do anything when .save() is being called after addNote() without updating the title and description input fields', () => {
    component.addNote();
    fixture.detectChanges();

    const note = component.note;
    component.save();
    fixture.detectChanges();

    const everyNote = component.notes.every((doc) => {
      return (
        typeof doc.title === 'string' &&
        doc.title.length > 0 &&
        typeof doc.description === 'string' &&
        doc.description.length > 0
      );
    });

    expect(component.notes.length).toEqual(mock.length);
    expect(everyNote).toBe(true);
  });

  it('should save a new document within the notes when .save() is being called after addNote()', () => {
    component.notes = mock;
    component.ngOnInit();
    component.addNote();
    fixture.detectChanges();

    const newTitle = 'new title';
    const newDescription = 'new description';

    component.title.setValue(newTitle);
    component.description.setValue(newDescription);
    component.save();

    expect(component.notes[component.notes.length - 1].title).toEqual(newTitle);
    expect(component.notes[component.notes.length - 1].description).toEqual(
      newDescription
    );
  });

  it('should instantiate a new note with empty title and description when .addNote() is being called', () => {
    component.ngOnInit();
    component.addNote();

    expect(component.note?.id.length).toBeGreaterThan(0);
    expect(component.note?.title).toEqual('');
    expect(component.note?.description).toEqual('');
  });

  it('shout revert the input fields when .revert() is being called', () => {
    const index = 2;

    component.showNote(index);
    fixture.detectChanges();

    const newTitle = 'new title';
    const newDescription = 'new description';

    component.title.setValue(newTitle);
    component.description.setValue(newDescription);
    fixture.detectChanges();

    component.revert();
    fixture.detectChanges();

    expect(component.title.value).toEqual(component.notes[index].title);
    expect(component.description.value).toEqual(
      component.notes[index].description
    );
  });

  it('should delete the note from notes at index when .deleteNote() is being called', () => {
    const index = 2;
    const note = component.notes[index];
    component.deleteNote(index);

    expect(component.notes.length).toBeLessThan(mock.length);
    expect(component.notes[index].id).not.toEqual(note.id);
  });
});
