# Galactic Age Calculator

#### Epicodus Code Review #5: Test-Driven Development and Webpack

#### Created By Marni Sucher, 8.5.2021

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Specs](#specs)
5. [Known bugs](#bugs)
6. [License Info](#license)
7. [Contact](#contact)

## Description <a id="description"></a>

This application will calculate the user's age on Mercury, Mars, Veunus, and Jupiter. It also will determine the user's estimated remaining years left to live on these planets.

## Technologies Used <a id="technologies"></a>

  * _Babel/core 7.6.4_
  * _Babel/plugin-transform-modules-commonjs 7.6.0_
  * _Bootstrap 4.5.0_
  * _Clean-webpack-plugin 3.0.0_
  * _CSS_
  * _css-loader: 3.2.0_
  * _eslint": 6.3.0_
  * _eslint-loader 3.0.0_
  * _file-loader 1.1.6_
  * _HTML5_
  * _html-loader 0.5.5_
  * _html-webpack-plugin 3.2.0_
  * _JavaScript ES6_
  * _Jest: 24.9.0_
  * _jQuery 3.5.1_
  * _Node Package Manager 6.14.9_
  * _popper.js 1.16.1_
  * _style-loader 1.0.0_
  * _webpack 4.39.3_
  * _webpack-cli 3.3.8_
  * _webpack-dev-server 3.8.0_

  ## Setup/Installation Requirements <a id="setup"></a>

Setup requirements
* Install [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) 
* Note: 
  If you are using a Windows machine, line 8 in package.json should be: 
`"start": "npm run build & webpack-dev-server --open --mode development"`
  For a Mac machine:
  `"start": "npm run build; webpack-dev-server --open --mode development"`

Installation
* Clone repository to your machine using command: `$ git clone https://github.com/marnionrails/galactic-age-calc`
* In your terminal, navigate to the top level of the directory: `galactic-age-calc/`
* Run this command to install the dependencies: `$ npm install`
* Run and open project in a live server: `$ npm run start`
* To lint code, run: `$ npm run lint`
* Run tests with Jest using command: `$ npm run test`

## Bugs <a id="bugs"></a>
* None at this time