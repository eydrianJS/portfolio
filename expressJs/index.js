const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }
    const htmlEmail = `
        <h3>Email ze strony</h3>
        <ul>
            <li>Imię: ${req.body.firstName}</li>
            <li>Nazwisko: ${req.body.lastName}</li>
        </ul>
      `;
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: '587',
      secure: 'STARTTLS',
      auth: {
        user: "maryjane.vonrueden32@ethereal.email",
        pass: "ZTchAR2GRnhq8XtyKq"
      }
    });

    let mailOptions = {
        from: "test@testaccount.com",
        to: "maryjane.vonrueden32@ethereal.email",
        replyTo: "test@testaccount.com",
        subject: "message",
        text: req.body.message,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }

      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server lissen in ${PORT}`);
});
