const routes = require("express").Router();
const User = require("../models/User");
const uid = require("unique-string-generator");
const sha1 = require("sha1");
const nodemailer = require("nodemailer")   // for sending email for otp

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "8723ce001@smtp-brevo.com",
        pass: "RCtjQcPUkw5sIEKJ",
    }, tls: {
        rejectUnauthorized: false
    }
});

routes.post('/', async (req, res) => {
    // console.log(req.body);
    let { email } = req.body;

    console.log(email);
    let result = await User.find({ email: email });
    if (result.length > 0) {
        let otp = uid.UniqueOTP(4);

        let mailOption = {
            from: '"Ankur" <ankurjoshi1991@gmail.com>',
            to: email,
            subject: "OTP For Change Password",
            html: "<h3>" + otp + "</h3>"
        }

        transporter.sendMail(mailOption, async (err, info) => {
            if (err) {
                console.log("Mail not Send: ", err);
            } else {
                await User.updateMany({ email: email }, { otp: otp });
                console.log("Success------", info.response);
            }
        })
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
})

routes.post("/checkotp", async (req, res) => {
    // console.log(req.body);
    let { email, otp } = req.body;
    let result = await User.find({ email: email });
    if (result[0].otp == otp) {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
})

routes.post("/updatepassword", async (req, res) => {
    let updateObj = { password: sha1(req.body.password) };
    await User.updateMany({ email: req.body.email }, updateObj);
    res.send({ success: true });

})

module.exports = routes;
