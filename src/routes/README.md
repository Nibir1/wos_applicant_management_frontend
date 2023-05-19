# WOS Applicant Management

This folder, `/src/routes` defines all the pages and layouts needed for the app.

There are a couple initial files that help make this work.

- `/src/routes/index.tsx` does the actual router implementation, and provides the component for `react-dom` to render the app.
- `/src/routes/routes.ts` provides an array to implement the application routes. **USE THIS TO ADD ROUTE PATHS**
- `/src/routes/RootLayout.tsx` builds the master layout for the whole application. You can edit this if you really want, but no need really.
- `/src/routes/ErrorPage.tsx` provides a component for displaying errors for things like 404s or 500s.

From here, each folder provides its own route implementation. Each folder should provide a file `route.tsx` to define the `react-router-dom` route definition for it, AND ANY CHILDREN. Once this is defined, you can import it from the parent route to define the route tree. This way, the individual paths are separated into their own definitions.

See the file `/login/route` for an example.

In addition, I'm starting the convention of keeping the "action" (what happens with form submit), in it's own sub-file as well defined as `action.ts`. Just to help clean things up.
