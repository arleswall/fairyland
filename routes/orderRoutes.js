const express = require("express");
const orderRoutes = express.Router();
const Order = require("../models/order");
const nodemailer = require('nodemailer');
const sendEmail = require("./email")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fairyland.encomenda@gmail.com',
        pass: 'redvelvet'
    }
});

orderRoutes.get("/:id", (req, res) => {
    Order.findById(req.params.id).populate("items.cupcake").exec((err, order) => {
        if (err)
            return res.status(500).send(err);
        return res.send(order);
    })
})

orderRoutes.post("/", (req, res) => {
    const newOrder = new Order(req.body);
    newOrder.save((err, order) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            sendEmail(order);

        }
        return res.send(order);
    })
})

orderRoutes.delete("/:id", (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err, order) => {
        if (err)
            return res.status(500).send(err);
        return res.send(order);
    })
})

orderRoutes.put("/:id", (req, res) => {
    Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, order) => {
        if (err)
            return res.status(500).send(err);
        return res.send(order);
    })
})

module.exports = orderRoutes;
