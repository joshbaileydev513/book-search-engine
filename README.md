[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# 21 Book Search Engine

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](lLicense)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
For this Week 21 Challenge we were tasked refactoring working code with RESTful API's to be a GraphQL API using an Apollo Server. The completed assignment has the the following:
` 1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.`
` 2. Modify the existing authentication middleware so that it works in the context of a GraphQL API. ` 
` 3. Create an Apollo Provider so that requests can communicate with an Apollo Server. `
` 4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas `

Our User Story is as follows: AS AN avid reader, I WANT to search for new books to read, SO THAT I can keep a list of books to purchase. 

## Installation
For installation instructions please visit my github repo https://github.com/joshbaileydev513/book-search-engine to clone and review the README provided.

## Usage
In order to use this app you will first need to navigate to the `joshuabailey.info` folder and open up a terminal. When the terminal is open, run the command `npm i` to install your dependencies. When those are finished installing, type `npm run build` into your GitBash terminal which will cd to the client folder and run npm build. Once that is finished, you will type the command `npm run start` which will start the server and open up our localhost on port 3000. Click on that link `http://localhost:3000` to view it within the browser. Once there, you are presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button. When clicked on the Search for Books menu option you will be presented with an input field to search for books and a submit button. If you are not logged in and enter a search term in the input field and click the submit button you are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site. If you navigate over to the Login/Signup menu option a modal appears on the screen with a toggle between the option to log in or sign up. You are then presented with three inputs for a username, an email address, and a password, and a signup button. When you are already signed up, you are presented with two inputs for an email address and a password and login button. Once you are logged in to the site you will see the menu options change to Search for Books, an option to see my saved books, and Logout. You also have the opportunity to click on the Save button on a book and that book’s information is saved to your account. The user can then look at their saved books are presented with all of the books they have saved to their account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account. Additonally, there is an option to remove a book from your saved books list. Lastly, there is also a logout option as well!

<!-- Deployed Application: Deployed Heroku Site goes here -->

## License
MIT
https://opensource.org/licenses/MIT

## Contributing
Joshua Bailey and EdX/UNCC Coding Bootcamp for some previous code examples/starter code!

## Questions
For any questions please reach out to me via GitHub `https://github.com/joshbaileydev513` or Email `jbailey2124@gmail.com`