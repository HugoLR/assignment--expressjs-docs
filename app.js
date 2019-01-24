require('dotenv').config();
const express = require ('express');
const booksList = require('./bookslist.json')
const item = require('./item.json')
const product = require('./products.json')
const productId = require('./productId.json')

const PORT = process.env.PORT;

const app = express();

//Express views
app.set('views', './src/views');
app.set('view engine', 'pug');

//Express static files
app.use("/static", express.static('./public'));

app.get("/", (req, res) => {
  res.render("index", {
    title: "API Reference"
  });
});

app.get("/docs/books/list", (req, res) => {
  res.render("list", {
    title_api: "API ENDPOINTS",
    listBooks: booksList
  })
})

app.get("/docs/books/item", (req, res) => {
  res.render("book_item", {
    title_api: "API ENDPOINTS",
    item_books: item
  })
})

app.get("/docs/products/list", (req, res) => {
  res.render("products", {
    title_api: "API ENDPOINTS",
    products: product
  })
})

app.get("/docs/products/item", (req, res) => {
  res.render("products_id", {
    title_api: "API ENDPOINTS",
    item_product: productId
  })
})


app.listen(PORT, () => {
  console.log(`Running on PORT ${ PORT }`)
});
