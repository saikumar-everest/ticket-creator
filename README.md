# ticket-creator

This project is useful to create tickets in ticket management systems like, zendesk, freshdesk. It's easy to integrate with any other new ticket management system also.

### Information about project structure.

You will find all the UI related code in `src/pages` and backend code in `src/backend`.

### How to run application?

1. Install project dependencies.
   `yarn`
2. Build UI and serve
   `yarn ui:build & yarn ui:serve`
   UI should be accessed at http://localhost:9000
3. Build backend and serve
   `yarn backend:build & yarn backend:serve`
   Backend should be accessed at http://localhost:3000

### How to run application for development?

1. Install project dependencies.
   `yarn`
2. Watch and serve UI
   `yarn ui:dev`
   UI should be accessed at http://localhost:8000
3. Watch and serve backend
   `yarn backend:dev`
   Backend should be accessed at http://localhost:3000

Access the backend graphql endpoint at http://localhost:3000/graphql(and for graphql playground ping the same url in browser).

### How to run unit tests?

    `yarn test`

We run few pre-commit hooks for safety of code.
