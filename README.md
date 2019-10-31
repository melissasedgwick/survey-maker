# Survey Maker #

A create-react-app project.

## Database and API ##

To set up the database:

1. Open PostgreSQL in the terminal: `psql`.
2. Create a survey_maker database:  `CREATE DATABASE survey_maker;`
3. Navigate into the database: `\c survey_maker`
4. Set up the surveys table: `CREATE TABLE surveys(id SERIAL PRIMARY KEY, name VARCHAR(60));`
5. Set up the users table: `CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(15) NOT NULL, password VARCHAR(20) NOT NULL);`

Once you've set up your database, run `node index.js` in the `survey-maker-db` directory to start the API. You should see 'App running on port 3001' in the terminal.

## Web Application ##

The following commands are available in the `survey-maker-ui` directory:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
