const moment = require("moment");
const nodemailer = require('nodemailer');
//const logo = require("../client/src/fairy_logo.png")
// <img style="width: 150px; padding: 30px" src=${logo} alt="">
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fairyland.encomenda@gmail.com',
        pass: 'redvelvet'
    }
});

function sendEmail(order){
    const mailOptions = {
      from: 'fairyland.encomenda@gmail.com', // sender address
      to: order.customer.email, // list of receivers
      subject: `Order Number ${order._id} Confirmation`, // Subject line
      html: createEmail(order)
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
         console.log(err)
        else
         console.log(info);
        });
}

function createEmail(order){
    let newDateFormat = moment(order.customer.pickUpTime).format("dddd, D MMMM YYYY");
    let newTimeFormat = moment(order.customer.pickUpTime).format("h:mm")
    return `
        <div style="height: 100vh; text-align:center; background-color: #EFD5DB; font-family:serif; color: #3B332D;">
            <br>
            <h3>Thank you ${order.customer.name} for your order with us!</h3>
            </br>
            <h3>Your order number is <span style="font-size: 2em">${order._id}</span><h3>
            <br>
            <h4>Remember to pick up your order on:
            <h3>${newDateFormat} </h3> <h4>at</h4> <h3>${newTimeFormat}</h3>
            <br>
            <h4>If you have any questions call us at <span style="font-size: 1.3em">(48) 3209-7462</span></h4>
        </div>
    `
}
module.exports = sendEmail
