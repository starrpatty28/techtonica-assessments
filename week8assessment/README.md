## **Building a RESTful API with Express, PostgreSQL, and Node Using ES6**
Building a basic bookstore ***RESTful API*** where a user can perform a basic CRUD (CREATE, READ, UPDATE AND DELETE) operation.

## Motivation
This week we learned about Express, Node.js, SQL, Postgres. This project lets you create your backend and run test using Postman.

## Image

![GET Postman](./images/Shot1.png)
![Users](./images/Shot2.png)
![POST Postman](./images/Shot3.png)
![index.js](./images/Shot4.png)

## Code Example
***Routes/index.js***
```
import Users from "../controllers/user";
import Books from "../controllers/book";

export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the bookStore API!"
    })
  );
  app.get('/api/books', Books.list); // API route for user to get all books in the database 
  app.post("/api/users", Users.signUp); // API route for user to signup
  app.post("/api/users/:userId/books", Books.create); // API route for user to create a book
  app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book

};
```

## Built with
<!-- <b>Built with</b> -->
### Libraries/Tools
- NodeJS version v12.8.1
- PostgreSQL
- Sequelize
- Postman
### Frameworks
- ExpressJS
## How to start?
1. Download Project File
2. Open File In A Text Editor (VS Code Recommended)
3. Open Terminal and Cd Into Project File
4. Start Server In Terminal By Running Command "npm start"
5. Open Browser & Navigate to (http://127.0.0.1:3000/api/books)
Collapse





