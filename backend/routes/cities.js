const express = require("express");
const City = require("../models/City");
const router = express.Router();

// Create City
router.post('/', async (req, res) => {
    const city = new City(req.body);
    try {
        await city.save();
        res.status(201).send(city);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read Cities
router.get('/', async (req, res) => {
    const cities = await City.find();
    res.send(cities);
});

// Update City
router.put('/:id', async (req, res) => {
    const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(city);
});

// Delete City
router.delete('/:id', async (req, res) => {
    await City.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

module.exports = router;