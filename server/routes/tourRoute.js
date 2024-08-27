import express from "express";
import transporter from "../utils/mailer.js"; // Import the Nodemailer transporter
import { dirname, join as pathJoin } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.post("/topptur", (req, res) => {
  const { name, email, message, phone, subject, peopleCount, date } = req.body;

  const mailOptionsToOwner = {
    from: email,
    to: process.env.EMAIL_USER, // Owner's email address
    subject: `Ny bokningsförfrågan från: ${name}`,
    text: `
    Ny bokningsförfrågan från: ${name}
  
    Kontaktuppgifter:
    Namn: ${name}
    Telefon: ${phone}
    E-post: ${email}
    Ämne: ${subject}
    Antal personer: ${peopleCount}
    Önskat datum: ${date}

    Meddelande/övrig information:
    "${message}"
    `,
  };

  const mailOptionsToUser = {
    from: `"Tak Mat O Tur" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Tack för din bokningsförfrågan!",
    text: `Tack för din bokningsförfrågan hos Tak Mat O Tur.\n\nVi kommer att återkomma med mer information så snart som möjligt.\n\nMed vänliga hälsningar,\nTak Mat O Tur`,
    html: `
      <div style="background-color:#ffffff; color:#000000; padding:10px; text-align:center; width:400px; border-radius:8px; font-size:16px; font-family: 'Montserrat', sans-serif;">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
        <h2 style="color:black;">Tack för din bokningsförfrågan hos Tak Mat O Tur.</h2> 
        <p style="color:black;">Vi kommer att återkomma med mer information så snart som möjligt.</p>
        <br><img width="100px" src="cid:takmatturlogo" alt="Tak Mat O Tur Logo">
        <br>
        <p style="color:black;">Med vänliga hälsningar,<br>Tak Mat O Tur</p> 
      </div>`,
    attachments: [
      {
        filename: "takmatotur.jpg",
        path: pathJoin(__dirname, "../../client/src/img/header/takmatotur.jpg"),
        cid: "takmatturlogo",
      },
    ],
  };

  transporter.sendMail(mailOptionsToOwner, (error, info) => {
    if (error) {
      console.error("Error sending email to owner:", error);
      return res.status(500).send("Error sending email to owner");
    } else {
      console.log("Email sent to owner:", info.response);
      transporter.sendMail(mailOptionsToUser, (error, info) => {
        if (error) {
          console.error("Error sending confirmation email to user:", error);
          return res
            .status(500)
            .send(
              "Email to owner sent, but error sending confirmation email to user"
            );
        } else {
          console.log("Confirmation email sent to user:", info.response);
          return res.status(200).send("Emails sent successfully");
        }
      });
    }
  });
});

export default router;