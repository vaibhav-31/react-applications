const express = require('express');
const app = express();
const data = require('./mocks/products');
const cors = require('cors');

let productStorage = [...data];

app.use(express.json())

app.use(cors()); //Middleware to work between port 3000 & 8080

// Handler for creating a new product
app.post("/product", (req, res) => {
    const product = {
        id: productStorage.length + 1,
        title: req.body.title,
        completed: false,
    }
    productStorage.push(product); // inserting the data in the storage
    res.send({
        data: productStorage,
    });
});

//Handler for returning products
app.get("/products", (req, res) => {
    res.send({
        data: productStorage,
    });
});

app.delete("/product/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).send({
            message: "id is required as a url param",
        });
        return;
    }
    const id = Number(req.params.id);
    productStorage = productStorage.filter((data) => data.id !== id);
    res.status(200).send();
});


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});