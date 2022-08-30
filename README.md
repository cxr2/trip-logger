# Trip Logger

## Aims

- To allow a person to log their trips to different countries
- To allow them to see which countries they have left to visit \*

            server          client

  DEV: nodemon vite-dev-server
  PROD: node _static file served_

$ DEBUG=express-session npm start

on windows:

> set DEBUG=express-session & npm start

## Data Shapes

### Entities

- Places (countries)
  <https://restcountries.com/v3.1/all>
- Users (Auth0 = sub(id)) - store extra info
- Trips [user, place, date]

### Views

- Profile (see your own trips)
- Unvisited countries
- Leaderboard - who has visited the most countries
