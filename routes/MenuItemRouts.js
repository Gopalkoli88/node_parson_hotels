const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
// below aree all menu routes
//adding the data into database 
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const responsed = await newMenu.save();
        console.log("Data saved successfully");
        res.status(200).json(responsed);
    } catch (error) {
        console.error("Error saving person", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
//getting all data from the database 
router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("Datasuccessfully");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error saving person", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        const responsed = await MenuItem.find({ taste });
        console.log("response fatched");
        res.status(200).json(responsed);
    } catch (error) {
        console.error("Error saving person", error);
        res.status(500).json({ error: "Internal server error" });
    }
})
router.put('/:id', async (req, res) => {
    try {
        const menuid = req.params.id;
        const updatedMenudata = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuid, updatedMenudata, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: 'MenuItem not found' });
        }
        console.log("Data updated successfully");
        res.status(200).json(response);
    } catch (error) {
        console.error("Error updating MenuItem", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const menuitmId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuitmId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log("Data deleted successfully");
        res.status(200).json(response);
    } catch (error) {
        console.error("Error deleting person", error);
        res.status(500).json({ error: "Internal server error" });
    }
})
module.exports = router;
