# ticket-creator

This project is useful to create tickets in ticket management systems like, zendesk, freshdesk. It's easy to integrate with any other new ticket management system also.

### Pre-requisites to run the application

1. Create a `.env` file from `env.sample` file in root folder, and add all the required environment variables.

### How to run application?

1. Install project dependencies.
   `yarn`
2. Build backend and serve
   `yarn backend:build & yarn backend:serve`
   Backend should be accessed at http://localhost:3000

### How to run application for development?

1. Install project dependencies.
   `yarn`
2. Watch and serve backend
   `yarn backend:dev`
   Backend should be accessed at http://localhost:3000

Access the backend graphql endpoint at http://localhost:3000/graphql (and for graphql playground ping the same url in browser).

### How to run unit tests?

    `yarn test`

We run few pre-commit hooks for safety of code.
