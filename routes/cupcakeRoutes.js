const express = require("express");
const cupcakeRoutes = express.Router();
const Cupcake = require("../models/cupcake");


cupcakeRoutes.get("/", (req, res)=>{
  Cupcake.find((err, cupcakes)=>{
    if (err) return res.status(500).send(err);
    return res.send(cupcakes);
  })
})

cupcakeRoutes.get("/:id", (req, res)=>{
  Cupcake.findById(req.params.id, (err, cupcake)=>{
    if (err) return res.status(500).send(err);
    return res.send(cupcake);
  })
})

cupcakeRoutes.post("/", (req, res)=>{
  const newCupcake = new Cupcake (req.body);
  newCupcake.save((err, cupcake)=>{
    if (err) return res.status(500).send(err);
    return res.send(cupcake);
  })
})

cupcakeRoutes.delete("/:id", (req, res)=>{
  Cupcake.findByIdAndRemove(req.params.id, (err, cupcake)=>{
    if (err) return res.status(500).send(err);
    return res.send(cupcake);
  })
})

cupcakeRoutes.put("/:id", (req, res)=>{
  Cupcake.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, cupcake)=>{
    if (err) return res.status(500).send(err);
    return res.send(cupcake);
  })
})



module.exports = cupcakeRoutes;