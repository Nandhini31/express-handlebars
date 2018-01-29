# How to run the application
- Clone the project and cd into it
- `npm install` install dependencies 
- `npm start`  start the application
- `npm test` run tests


# Design and Approach 

The approach started with breaking down the problem into small steps and identifying dependent packages. 

After trying out  different view engines like Pug, EJS and Handlebar. Advantages of handlebar was simple parsing of markdown for templating also compatibility with testing libraries(Mocha and Chai)

I had to decide on file system packages, markdown parser that is compatible with Handlebars.

I followed a TDD approach  Red-Green-Refactor. I started implementing tests for status 200 , status 404 and then started testing and  building different routes. The challenge was to compare the html returned by the template engine and the one that is actually rendered on the screen. 

Code Structure

    - App.js - Entry point to the application. Routes are defined here

    - ViewS/layouts/main.handlebars which contains default layout i.e template for handlebars

    - test/app_spec.js - Contains end to end tests. Test cases include positive test cases like Status 200, page contains the right content when it hits the right route . Negative test cases include testing 404 Error when a route requested does not exist .I used chai-http which allows HTTP integration testing with Chai assertions. 


Dependencies

    - Express-handlebars
    - node file-system 
    - Marked a Markdown parser 

Future Improvement

    - Stubs for test data and Mock for making calls using Sinon

# Built With

- Node +  Express.js 
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
