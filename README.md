# How to run the application
- `npm i` install dependencies 
- `npm start`  start the application
- `npm test` run tests


# Design and Approach 



I started with breaking down the problem into small steps. I narrowed down the main technologies to use i.e Express.js . node.js and Mocha and Chai. Next I moved on to the View Engine. After researching and trying different ones like Pug,EJS and Handlebar. I settled with  Handlebar as converting the markdown to Handlebar was straightforward with lot of existing libraries and compatible with test libraries Mocha and Chai. 

I followed  a TDD approach. I started with the smallest functionality and Red-Green-Refactor.

Folder Structure includes a view folder that contains the default layout for handlebar which is essentially template.html. In the test folder app-spec.js includes all the tests for the application. 

Tests include positive test cases like Status 200, page contains the right content for the right route . Negative test cases include testing 404 Error when a route does not exist. 

Dependencies
    - Express-handlebars
    - node file-system 
    - Marked a Markdown parser 

Future Improvement
    - I would have liked to mock the calls and use stub for stubbing test data. 

# Tech Stack 

- Server: Express.js 
- Package Manager: npm
- View Template Engine : Handlebars
- Testing : Mocha and Chai


# Static Content challenge

**NB: Please do not fork this repository, to avoid your solution being visible from this repository's GitHub page. Please clone this repository and submit your solution as a separate repository.**


The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.

This repository contains a `template.html` template file and a `content` folder with sub-folders containing `index.md` markdown files.

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.
