# Campus Bite Backend

> Food platform for university student.


### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'your secret'

```

### Install Dependencies

```
npm install
```

### Run

```
# Run server
npm run start

# Run server with nodemon 
npm run server
```


There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

