PLACES API
-a not so unique api where you can add a place, get a place, get the places that already exists, or get places with filters.

base url : "/place"
Usages:

endpoint: "/", method: GET

- get all the places
- optional queries
  -- city, name, state, slug
- example requests
  -- url "/" will return all of the places
  -- url "?city=new york" will return all places with "new york" as the city

endpoint: "/", method: POST

- add a new place
- requires a body with place,slug,city, and state key values

endpoint: "/:slug", method: GET

- get one place
- url "/my-home" will return the place with the slug "my-home"
