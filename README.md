# Full-Stack Capstone Project

## Requirements / Features:
1. Design and develop a RestfulAPI for the front-end of the project.
2. Develop an EntityRelationshipDiagram(ERD) to facilitate the creation of the database by clearly stating the entities, their attributes, and their relationships. Make use of lucid chart to implement this.
3. Create a Postman collection for testing all your endpoints and later design a comprehensive API Documentation based on the collection.
4. Version your API using URL versioning starting with the letter“v”. A simple ordinal number would be appropriate. Avoid dot notation such as 2.5. An example of this will be https://somewebapp.com/api/v1/users
5. You should restrict unauthorized users from making POST, DELETE and PATCH HTTP requests to all API endpoints.
6. Write unit tests for your API endpoints using Jest and Supertest. Test coverage should be at least 70%
7. Set up a CI/CD (Continuous Integration / Continuous Deployment) pipeline using GitHub Actions.
8. Ensure the API gets deployed to Heroku through the Continous Deployment workflow setup with GitHub Actions.
9. At a minimum, you should have the following API endpoints working for either one of the projects you choose to attempt.

## Endpoints 
<!-- Tables -->
| EndPoint     | Functionality          | Note |
| ------------ | -------------- | -------------- |
| POST => /users/signup     | Register a user | User added to the database should be unique to avoid duplication. |
| POST => /users/login     | Login a user | Should provide an access token in the response body. |
| POST/GET => /movies     | Add a new movie to the library or retrieve all movies. | The addition of new movies is reserved for authenticated users. |
| GET,PATCH,DELETE => /movies/:movieId     | Retrieve, update or delete a movie by it’s Id. | Updating and deleting a movie is reserved for authenticated users. |