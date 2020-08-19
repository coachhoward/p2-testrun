const express = require("express");
const router = express.Router();
const Vegetable = require("../models/vegetables.js");

// Index
router.get("/", (req, res) => {
  Vegetable.find({}, (error, allVegetables) => {
    res.render("vegetables/Index", {
      vegetables: allVegetables,
    });
  });
});


//NEW___GET  /vegetables/new
router.get('/new', (req, res) => {
  res.render('vegetables/New');
});

//DELETE
router.delete('/:id', (req, res) => {
  // Delete document from collection
  Vegetable.findByIdAndRemove(req.params.id, (err, vegetable) => {
      res.redirect('/vegetables');
  });
});

//UPDATE----PUT

router.put('/:id', (req, res) => {
  req.body.isGreen = req.body.isGreen === "on" ? true : false;

  // Update the vegetable document using our model
  Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
      res.redirect('/vegetables');
  });
});



//CREATE--- POST /vegetables/
router.post('/', (req, res) => {
  if (req.body.isGreen === "on") {
      req.body.isGreen = true;
  } else {
      req.body.isGreen = false;
  }
  // Use Model to create vegetable Document
  Vegetable.create(req.body, (error, createdVegetable) => {
      // Once created - respond to client
      res.redirect('/vegetables');
  });
});

//EDIT
router.get('/:id/edit', (req, res) => {
  // Find our document from the collection - using mongoose model
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
      // render the edit view and pass it the found vegetable
      res.render('vegetables/Edit', {
          vegetable: foundVegetable
      })
  });
});

//SHOW
router.get('/:id', (req, res) => {
  // Find the specific document
  Vegetable.findById(req.params.id, (error, foundVegetable) => {
      // render the Show route and pass it the foundVegetable
      res.render('vegetables/Show', {
          vegetable: foundVegetable
      });
  });
});


module.exports = router;