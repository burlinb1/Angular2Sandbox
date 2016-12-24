# FamilyTree3

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## PROJECT SETUP

1. Install bootstrap

npm install bootstrap@3

2. Install ng2-bootstrap for angular2 bootstrap components:

npm install ng2-bootstrap --save 

3. Add the following to 'launch.json' file "configurations" section,
where url is configured to launch using same port used when running 
with Angular cli:

        {
        "name": "Launch localhost with sourcemaps",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:4200/",
        "sourceMaps": true,
        "webRoot": "${workspaceRoot}"
        },

4. Run app using angular cli:

ng serve

5. Once app server is running you can debug by choosing
the "Launch localhost with sourcemaps" debug option