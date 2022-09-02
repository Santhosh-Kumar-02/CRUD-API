# CRUD-API

CRUD is an acronym that comes from the world of databases. Each letter stands for one type of action that a user can perform on a set of data: Create, Read, Update, and Delete.

![image](https://user-images.githubusercontent.com/112671500/188038167-373cdcf0-dc8e-4ce6-9e80-b868890808f4.png)

In this project, we will buid a simple REST API using node.js and express framework.

![image](https://user-images.githubusercontent.com/112671500/188038185-6c624a4e-a487-40e5-8421-902d8877ee23.png)

GET is for reading or retrieving data, the R in CRUD. This verb is idempotent so that making the same GET request twice returns the same response (unless the underlying data changed in the meantime) and it’s also safe because it doesn’t alter the server-side state. When designing an API, you should never, ever use GET for something that can modify a resource on the server.

DELETE is the D in CRUD and removes one or more resources from the server.


PUT affects the resource identified by the URL. For example, a PUT on /users/1 either creates a user with the ID 1 or modifies the existing user with this ID. Since most APIs generate identifiers on the server and do not allow creating resources in this way, PUT is confined to update operations but, again, this is not inherent to this verb. Also, PUT is idempotent because doing the same update twice won’t be harmful.

POST sends data to the server and leaves it up to the server to do something with it. It is the most flexible verb. In the context of CRUD APIs it is typically used to create resources where the URL of the final resource is not a priori known. For example, a POST to /users creates a new user with a new ID, which then can be retrieved from, e.g., /users/1. POST is not idempotent because a repeated request to /users would create a second user at /users/2. POST is also applicable to all non-CRUD actions.


