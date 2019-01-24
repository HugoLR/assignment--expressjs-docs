# Documentation

## Context

Good documentation is the difference between common projects and the amazing ones.

## The Assignment

Build the docs for basic endpoints.

Write only the needed information:

+ Endpoint
+ What is the main objective
+ How to do a request to that endpoint
+ What is the response

**Explain, STEP by STEP how to do requests from JavaScript to the correct endpoint.**

### About the Design

Get fancy, have some inspiration from [Stripe Docs](https://stripe.com/docs/api).

### Base URL

All request should point to `https://api.myownfancyproject.com/`

#### GET /books

I should see this documentation when I visit `http://localhost:3000/docs/books/list`.

Response from this request:

```js
{
  data: [{
    id: 1,
    name: "To Kill a Mockingbird",
    author: "Harper Lee"
  }, {
    id: 2,
    name: "Pride and Prejudice",
    author: "Jane Austen"
  }, {
    id: 3,
    name: "The Diary of Anne Frank",
    author: "Anne Frank"
  }, {
    id: 4,
    name: "1984",
    author: "George Orwell"
  }, {
    id: 5,
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  }, {
    id: 6,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  }, {
    id: 7,
    name: "Charlotte's Web",
    author: "E.B. White"
  }],
  meta: {
    books: 7,
    page: 1,
    prev: null,
    next: 2
  }
}
```

#### GET /books/:id

I should see this documentation when I visit `http://localhost:3000/docs/books/item`.

Response:

```js
{
  data: [{
    id: 1,
    name: "To Kill a Mockingbird",
    author: "Harper Lee"
  }],
  meta: {
    books: 1
  }
}
```

#### GET /products

I should see this documentation when I visit `http://localhost:3000/docs/products/list`.

Response from this request:

```js
{
  data: [{
    id: 1,
    name: "Crocs Men's and Women's Classic Clog | Comfort Slip On Casual Water Shoe | Lightweight",
    owner: "Crocs"
  }, {
    id: 2,
    name: "Brooks Men's Cascadia 12",
    owner: "Brooks"
  }, {
    id: 3,
    name: "Nike Men's Benassi Just Do It Athletic Sandal",
    owner: "Nike"
  }, {
    id: 4,
    name: "Skechers Men's Equalizer Persistent Slip-On Sneaker",
    owner: "Sketcher"
  }, {
    id: 5,
    name: "Nike Women's Free RN 2017 Running Shoe",
    owner: "Nike"
  }, {
    id: 6,
    name: "Columbia Men's Silver Ridge Convertible Pant",
    owner: "Columbia"
  }],
  meta: {
    products: 6,
    page: 2,
    prev: 1,
    next: 3
  }
}
```

#### GET /products/:id

I should see this documentation when I visit `http://localhost:3000/docs/products/list`.

Response from this request:

```js
{
  data: [{
    id: 1,
    name: "Crocs Men's and Women's Classic Clog | Comfort Slip On Casual Water Shoe | Lightweight",
    owner: "Crocs"
  }],
  meta: {
    products: 1
  }
}
```

### Setup Instructions

1. Create a basic project
2. Install and configure Express.js
3. Configure your static files
4. Write the needed views to show the docs

### Deliverables

+ A GitHub repository
+ You will need to push your code to github

```sh
git add .
git commit -m "«your commit msg»"
git push origin master
```

### Important

Don’t forget to include an index view to list all other documentation views.