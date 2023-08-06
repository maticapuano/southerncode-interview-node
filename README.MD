# Movies API Challenge

## Overview

Welcome to the Movies API Challenge! This API allows users to submit reviews for movies using external API to get the movie information and store it in a local database.

## Technologies Used in this Project

- Node.js
- Nest.js
- PostgreSQL
- Docker
- Docker Compose
- Swagger

## Demo

If you want to check the API in action you can use the following URL: [https://southerncode-interview-node.onrender.com/docs](https://southerncode-interview-node.onrender.com/docs)

## Prerequisites

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/)
- NPM or Yarn
- [PostgreSQL](https://www.postgresql.org/download/)
- [Movie Database API Key](https://developers.themoviedb.org/3/getting-started/introduction)

## Installing

### Clone the repository

```bash
git clone https://github.com/maticapuano/southerncode-interview-node.git maticapuano-southerncode-interview
```

### Install dependencies

```bash
cd maticapuano-southerncode-interview
npm install
```

### Copy environment variables

Please fill the environment variables with your own values, you can use the default values.

```bash
cp .env.example .env
```

### Run the application

```bash
npm start
```

### Run the application using Docker

Please check the .env file and change the values if needed and check the Docker is running.

```bash
docker-compose -f docker-compose-dev.yml up
```

### Swagger documentation

You can check the API documentation in the following URL:

```bash
http://localhost:3000/docs
```

## Migrations

### Create a new migration

If you want to create a new migration you can use the following command:

```bash
npm run migration:create --name=create-table-name
```

### Run migrations

If you need to run the migrations manually you can use the following command:

Note: The migrations are executed automatically when the application starts.

```bash
npm run migration:up
```
