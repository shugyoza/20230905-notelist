# 20230905Notelist

## User Stories

- I want to have a noteList app that shows list of my notes title on the left side. On the right side, an input field for a note title, another input field for note description, a button to revert, and another button to save.
- The first time I visit the app, all input fields and buttons must be in a disabled state (cannot input nor click on them).
- On the top of the left side, I want a "+" button that enables me to type on title and description input fields, as well as clicking on both 'revert' and 'save' button.
- The list of notes on the left side show each notes title, followed by an 'X' button.
- When I clicked on one of the note title, the input field for title on the right side will show the note title, and the input field for description on the right side will display the note description.
- When I clicked 'X', that note will be deleted from the notes list.
- On the right side, if I clicked Save button when any of the input fields is empty, it will do nothing.
- If I clicked Save after clicking one of the note title on the left side that prefilled the input fields, any content in the input fields will modify that note title and description. Also all the input fields and buttons get disabled again.
- If I clicked Revert, everything I typed in the input fields will be replaced by the note title and description that has been saved (previous values when I clicked the note title).
- If I clicked Saved after I clicked '+' on the left side. A new note will be added to the list of notes on the left side. Also all the input fields and buttons get disabled again.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
