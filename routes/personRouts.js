const express = require("express");
const router = express.Router();
const Person = require("../models/Person");
//below are all persons routes
router.post("/", async (req, res) => {
    try {
        //assuming the request body contain something data
        const data = req.body;
        //createing new person using mongoose modeel
        const newPerson = new Person(data);
        //save the new all person to database
        const responsed = await newPerson.save();

        console.log("Data saved successfully");
        res.status(200).json(responsed);
    } catch (error) {
        console.error("Error saving person", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Datasuccessfully");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error saving person", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
// here parametarise routes (searching)
router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const responsed = await Person.find({ work: workType });
            console.log("response fatched");
            res.status(200).json(responsed);
        } else {
            res.status(404).json({ error: "invalid work type enter by u" });
        }
    } catch (error) {
        console.error("Error for da", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


//here we are goning to update the data 
router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        })
        if (!response) {
            return res.status(404).json({ error: 'person is not find' })
        }
        console.log("data updated")
        res.status(200).json(response);
    } catch (error) {
        console.error("Error for da", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

//here we are goning to apply the delete method that can delete record base in the id 
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId); // Updated method
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log("Data deleted successfully");
        res.status(200).json(response);
    } catch (error) {
        console.error("Error deleting person", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
