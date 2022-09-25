# Advanced Book Search Engine - MERN
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

In this project, I took a fully functioning Book Search Engine built with a RESTful API and refactored it to use a GraphQl API and an Apollo Server. I used my knowledge of the MERN stack (MongoDB, Express, React, Node) to upgrade this application for better performance and allow users to sign up or log into an account. Once logged in, users can search for books using the Google Books API and save them to a personalized books list as well as remove them. GraphQL queries and mutations replaced the existing RESTful API to fetch and modify data while being powered by the Apollo Server. In addition, the authentication middleware was modified to work with GraphQL API and an Apollo Provider was created to allow requests to communicate with the Apollo Server.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Credits](#credits)
* [Links](#links)
* [License](#license)

## Installation

To install this application on your local machine:

- Clone the application's repository and place it into a local directory on your computer.
- Ensure that your computer has node.js installed.
- Open a command-line interface (VS Code, Git Bash, etc.) and navigate to the root directory.
- In the command-line, download the application's dependencies by typing: 
```
    npm install
```
- Start the application by typing the following command. Your default web browser will then open the application in a new tab. 
```
    npm run develop
```

## Usage

To use this application, navigate to the Links section and click on the link to the deployed application on Heroku. To create an account or log into an existing account, click on the Login/Signup menu option in the upper right corner of the navbar. A modal will appear on the screen with options to log in or sign up. FIll out the required fields and the modal will close and return the logged in user to the search screen. To search for books, type in a book title in the search field and hit submit. The API will return a list of books matching the title along with detailed information for each book such as authors and description. To save a book to your list, click on the 'Save This Book' button at the bottom of each card and the button will be disabled with a message that indicates the book is already saved. To view books in your list, click on the 'See your books' option at the top of the page in the navbar and the page will take you to your list of saved books. To remove a book from your list, simply click on the 'Delete this Book at the bottom of the card. To return to the search page, click on the 'Search For Books' option at the top of the page in the navbar.

## Screenshots

The following images demonstrate the application's appearance and functionality.

![search-page](https://user-images.githubusercontent.com/103476893/192128412-a858a6be-4253-4753-863b-c442fcfaf342.png)

![login-signup-modal](https://user-images.githubusercontent.com/103476893/192128417-17e1627f-1097-4d90-822e-a9ebb8650247.png)

![search-results](https://user-images.githubusercontent.com/103476893/192128420-fa633195-88f0-41ba-87f1-9792091cf54a.png)

![saved-books](https://user-images.githubusercontent.com/103476893/192128422-364c9461-913a-4b1f-a227-e4b6805872cf.png)

## Technologies Used

- MERN
- GraphQL API
- Apollo Server
- Heroku

## Credits

- [kt946](https://github.com/kt946)

## Links

- [Link to deployed application on Heroku]()

- [Link to GitHub repository](https://github.com/kt946/advanced-book-search-engine-MERN)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) License.
