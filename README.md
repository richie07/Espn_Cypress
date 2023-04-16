
# Project Cypress
Project for test concept of framework test on cypress

## Getting Started
These instrucions will get you a copy of the project up and running on your local machine for development and testing purposes.See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Para la ejecución en local:
- Visual Studio Code

### Instalación de local:
```
$ npm install --save-dev cypress@12.2.0
$ npm install -D cypress-xpath
$ npm install cypress-session
$ npm install --save-dev cypress@12.4.1
$ npm install --save-dev cypress-cucumber-preprocessor
$ npm install --save-dev cypress-wait-until
$ npm install 

Note: If you want inizialite new proyect, You should the following firts
$ init

```

### Running tests in local
```
$ npx cypress run --browser chrome --headless --spec 'cypress\e2e\Espn\*.js'
```

### To view the reports
By Implement

## Built with
* [Cypress](https://www.cypress.io/) - The framework used for automates apis
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Used to make the scripts

## Versioning
We use [Github](https://github.com/) - for versioning.For the versions available, see the [tags on this repository](https://github.com/richie07/projectKarate)

## Author
* **Richard Francisco**

## Acknowledgments
* Hat tip to anyone who's code was used
* Inspiration
* etc