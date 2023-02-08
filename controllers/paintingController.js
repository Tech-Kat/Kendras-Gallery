const express = require("express");

const paintings = express.Router();


//INDEX
paintings.get("/", async (req, res) => {
    const allPaintings = await getAllPaintings()
})