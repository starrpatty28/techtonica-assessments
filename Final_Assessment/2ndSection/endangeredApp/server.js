const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'endangered'
  }
});

// Controllers - aka, the db queries
const main = require('./controllers/main')

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/animal', (req, res) => main.getAnimalData(req, res, db))
app.get('/scientistinput', (req, res) => main.getScientistInputData(req, res, db))
app.get('/scientisttrack', (req, res) => main.getScientistTrackData(req, res, db))

//********************************************************************************************/
//app.post('/endangered', (req, res) => main.postTableData(req, res, db))
app.post('/animal', (req, res) => main.postAnimalData(req, res, db))
app.post('/scientistinput', (req, res) => main.postScientistInputData(req, res, db))
app.post('/scientisttrack', (req, res) => main.postScientisTrackData(req, res, db))

//*******************************************************************************************/
app.put('/animal', (req, res) => main.putAnimalData(req, res, db))
app.put('/scientistinput', (req, res) => main.putScientistInputData(req, res, db))
app.put('/scientisttrack', (req, res) => main.putScientistTrackData(req, res, db))

//*******************************************************************************************/

app.delete('/animal', (req, res) => main.deleteAnimalData(req, res, db))
app.delete('/scientistinput', (req, res) => main.deleteScientistInputData(req, res, db))
app.delete('/scientisttrack', (req, res) => main.deleteScientistTrackData(req, res, db))
//*******************************************************************************************/


// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})

