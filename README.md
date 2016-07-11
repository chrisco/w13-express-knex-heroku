# Practice Making and Deploying Crud App

````
$ express --hbs --git list
$ cd list
$ npm i -S knex pg dotenv
$ atom .
$ knex init
$ git init
Add .env and nodemodules to .gitignore file
$ npm i
$ createdb list

Edit knexfile.js
require('dotenv').config();

module.exports = {

	development: {
		client: 'pg',
		connection: 'postgres://localhost/list'
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL + "?ssl=true"
	}
};

Create and edit db/knex.js
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
module.exports = knex;

Edit Route and View
[see files]

Make Migration
$ knex migrate:make dev

Edit Migration
$ knex migrate:latest

Seed DB
$ knex seed:make people

Run Seeds
$ knex seed:run

Deploy
$ heroku create // https://radiant-sea-70457.herokuapp.com/
$ heroku addons:create heroku-postgresql --app radiant-sea-70457
$ heroku pg --app radiant-sea-70457
$ heroku pg:psql --app radiant-sea-70457

Get Database URL and Put in .env
$ heroku config // postgres://pylhthgvuxkedy:eTkdeJVtTczOigMzto1eAyf8RO@ec2-54-235-208-3.compute-1.amazonaws.com:5432/d28e6ad209jcn

Migrate and the on Heroku
$ knex migrate:latest --env production // Must have DB URL in .env for this to work
$ knex seed:run --env production

Git Commit and Push to Heroku and Open
$ git push heroku master
$ heroku open
````
