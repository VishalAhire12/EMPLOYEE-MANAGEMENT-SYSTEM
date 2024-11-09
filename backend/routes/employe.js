const express = require("express");
const router =express.Router();
const productModel=require("../modal/employees")

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const employeeres = await productModel.insertMany(data); // Save the product instance
        res.status(201).send(employeeres);
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: 'Error saving product', details: err.message }); // Send a more meaningful error response
    }
});
router.get("/", async (req, res) => {
    try {
        const employ = await productModel.find(); // Fetch all products from the database
        res.status(200).send(employ); // Send the products in the response
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Error fetching products', details: err.message }); // Send a meaningful error response
    }
});
module.exports=router;