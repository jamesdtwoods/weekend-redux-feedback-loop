# Full Stack Feedback

## Description

_Duration: one weekend_

This was my first solo full stack CRUD web app using redux to handle state and Material UI for styling. It's also my first time hosting something, [check it out!](https://lit-ridge-30420-4b7e6abf41cc.herokuapp.com/#/)

## Screen Shot

<img width="502" alt="Screenshot 2024-01-13 at 2 18 53 PM" src="https://github.com/jamesdtwoods/weekend-redux-feedback-loop/assets/142618619/b5d74f92-7a91-4be0-911e-eb70c1662af6">
<img width="610" alt="Screenshot 2024-01-13 at 2 19 12 PM" src="https://github.com/jamesdtwoods/weekend-redux-feedback-loop/assets/142618619/c6f90d21-8aa2-4555-b4f3-0a0333a303e6">
<img width="483" alt="Screenshot 2024-01-13 at 2 19 41 PM" src="https://github.com/jamesdtwoods/weekend-redux-feedback-loop/assets/142618619/e93de634-70eb-44b5-a378-d83f929cb091">
<img width="878" alt="Screenshot 2024-01-13 at 2 22 28 PM" src="https://github.com/jamesdtwoods/weekend-redux-feedback-loop/assets/142618619/617adf10-2850-417f-bd2c-383d9abeee2f">

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [pg-pool](https://www.npmjs.com/package/pg-pool)
- [Postico](https://eggerapps.at/postico/v1.php) - or any other database client
- [Postgres](https://www.postgresql.org/) - or any other database manager
- [nodemon](https://www.npmjs.com/package/nodemon) - far from necessary, but a helpful tool to keep your server up to date with any js changes you make.
- react 
- react-dom
- react-redux
- react-router-dom
- react-scripts
- redux-logger
- [Material UI](https://mui.com/material-ui/getting-started/) - or your styling library of choice


## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Using the provided inputs enter your feedback 
2. Pressing the "next" buttons adds your input to your entry
3. Users will have the option to go back and re-enter thier inputs
4. Admins should navigate to the `/admin` url inorder to view the administrator page
    - Admins will be able to delete feedback or flag it for review

## Future goals
* Further Material UI styling - especially admin table
* Once I've learned how to handle logins this could be added to the app 
* Adding modals for pop-up warnings instead of using `.alert()`

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) (especially all the chefs in the Moonstone cohort and our most patient and thoughful instructor Matt) who gave me the tools and confidence to make this application a reality.

## Support
If you have suggestions or issues, you can find my contact information on my [LinkedIn profile](https://www.linkedin.com/in/james-d-t-woods/)
