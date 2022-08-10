# CRUD example
A basic CRUD of Node JS with Mongo DB, Express, TypeScript, Mocha, Chai and Sinon

## Setting up the project

```bash
npm ci
npm start
npm run tests

```
Start a MongoDB instance locally with Docker.

```bash
docker run -d --name mongo -v mongo:/data -p 27017:27017 mongo
```

## Tests

```bash
npm run tests
```