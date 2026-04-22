# Unit Jasmine testing in Syncfusion Angular Grid component

## Repository Description

This repository demonstrates how to perform unit testing using Jasmine for the Syncfusion Angular Grid component in an Angular application, focusing on test setup, execution, and best practices.

## Project Overview

This project is an Angular-based application generated using Angular CLI version 12.1.2. The primary goal of the repository is to showcase unit Jasmine testing for the Syncfusion Angular Grid component. It serves as a reference implementation for developers who want to understand how to configure, write, and run unit tests for Syncfusion Grid features within an Angular environment.

The project emphasizes proper testing workflows using standard Angular testing tools and follows recommended practices for validating grid behavior and component interactions.

## Technologies Used

- Angular (Angular CLI 12.1.2)
- Syncfusion Angular Grid
- Jasmine testing framework
- Karma test runner
- Node.js (version 14 or higher)

## Prerequisites

Before running the application, ensure the following are installed:
- Node.js version 14 or above
- Angular CLI compatible with Angular 12
- A supported web browser for development and testing

## Running the application

1. Install all required dependencies by running the following command in the project root directory:

    ```bash
    npm install
    ```
2. **Development Server**: To start the development server, run:

    ```bash
    ng serve
    ```
    Navigate to http://localhost:4200/. The application will automatically reload when you modify any source files.

3. **Build**: To build the project for production, use:
    ```
    ng build
    ```
    The compiled build artifacts will be generated in the dist/ directory.

4. **Running Unit Tests**: Execute unit tests using the following command:
    ```
    ng test
    ```
    This will run Jasmine unit tests via the [Karma](https://karma-runner.github.io) test runner and display results in the browser and console.

## Reference

- [Angular documentation](https://angular.io/guide/testing#set-up-testing)
- [Sycfusion Grid testing](https://ej2.syncfusion.com/angular/documentation/grid/how-to/unit-jasmine-testing)