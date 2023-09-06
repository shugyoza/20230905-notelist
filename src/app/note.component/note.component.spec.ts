import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
