# Meal-Preppers

## Tech Stack ##

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## Meal prepping and shopping made easy ##
  > Quickly and easily plan a week of new, flavorful dishes, and generate a shopping list, all in one place.

## Who can benefit? ##
  > For busy professionals, parents, students, or anyone who likes having a plan for the week, this is the app for you!

## Summary ##
  > This product lets you easily scroll through a list of cuisines from around the world, and choose from many new and exciting recipes. Found a recipe you want to try? Add the ingredients to a cumulative shopping list for the week, and you are good to go shopping. Return to the site when you are ready to cook and the full instructions will be ready for you.

## Problem ##
  > Take worrying about dinner every night off of your list with this plan ahead tool. Eat healthier and save money by cooking at home!

## How to Get Started ##
  > Visit the live site here:
  > https://meal-preppers.herokuapp.com/

  To run locally:
  > This repo requires node >= 14 and postgres to be installed and running.
  > 1. Clone the repo onto your local machine
  > 2. Run `npm install` to install the necessary packages
  > 3. Make a copy of the `config.example.js` file and name it `config.js`. Fill in the fields. (local dev API_KEY can be set to 1)
  > 4. Enter into the postgres CLI using `psql postgres`
  > 5. Create the database using `\i <FULL_PATH_TO_SCHEMA>`
  > 6. Start the development server using `npm run dev-start`
  > 7. Start the front end using `npm run dev-build`
  > 8. Open the application at localhost:3000.

## Future Development ##
  > * Add quantities to the shopping list and remove things like water.
  > * Make shopping list printable and add ability to remove items from list that you already have at home.
  > * Add a calendar feature that will allow you to save recipes for upcoming weeks, and generate a shopping list for each week.
