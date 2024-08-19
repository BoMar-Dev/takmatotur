import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors"; // Import the cors package
import { dirname, join as pathJoin } from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Serve static files from the 'client/src/img' directory
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/img", express.static(pathJoin(__dirname, "../client/src/img")));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact route
app.post("/kontakt", (req, res) => {
  const { name, email, message, phone } = req.body;

  // The message sent to Tak Mat O Tur from the user who wrote in the form
  const mailOptionsToOwner = {
    from: email,
    to: process.env.EMAIL_USER, // Your email where you want to receive the messages
    subject: `Nytt e-postmeddelande från: ${name}`,
    text: `
    Nytt meddelande från: ${name}
  
    Meddelandet lyder:
    "${message}"
  
    Kontaktuppgifter:
    Namn: ${name}
    Telefon: ${phone}
    E-post: ${email}
    `,
  };

  // Information message that goes out to the person who filled in the form
  const mailOptionsToUser = {
    from: `"Tak Mat O Tur" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Tack för att du kontaktade oss!",
    text: `Vad roligt att du kontaktat oss på Tak Mat O Tur.\n\nVi svarar på ert önskemål så fort vi bara kan.\n\nMed vänliga hälsningar,\nTak Mat O Tur`,
    html: `
      <div style="background-color:#ffffff; color:#000000; padding:10px; text-align:center; width:400px; border-radius:8px; font-size:16px; font-family: 'Montserrat', sans-serif;">
        <!-- Import the Montserrat font -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
        <h2 style="color:black;">Vad roligt att du kontaktat oss på Tak Mat O Tur.</h2> 
        <p style="color:black;">Vi svarar på ert önskemål så fort vi bara kan.</p>
        <br><img width="100px" src="cid:takmatturlogo" alt="Tak Mat O Tur Logo">
        <br>
        <p style="color:black;">Med vänliga hälsningar,<br>Tak Mat O Tur</p> 
      </div>`,
    attachments: [
      {
        filename: "logooo.jpg",
        path: pathJoin(__dirname, "../client/src/img/header/logooo.jpg"),
        cid: "takmatturlogo",
      },
    ],
  };

  // Send the email to the owner first
  transporter.sendMail(mailOptionsToOwner, (error, info) => {
    if (error) {
      console.error("Error sending email to owner:", error);
      return res.status(500).send("Error sending email to owner");
    } else {
      console.log("Email sent to owner:", info.response);
      // If email to owner was successful, attempt to send the confirmation email to the user
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

// General Running Form route
// General Running Form route
app.post("/coach", (req, res) => {
  const { company, name, phone, email, subject, peopleCount, message } =
    req.body;

  // The message sent to Tak Mat O Tur from the user who filled out the form
  const mailOptionsToOwner = {
    from: email,
    to: process.env.EMAIL_USER, // Your email where you want to receive the messages
    subject: `Nytt e-postmeddelande från: ${name} om ${subject}`,
    text: `
    Företag: ${company || "Ingen angiven"}
    Namn: ${name}
    Telefon: ${phone}
    E-post: ${email}
    Ämne: ${subject}
    Antal personer: ${peopleCount}
    Meddelande: ${message || "Inget meddelande"}
    `,
  };

  // Information message that goes out to the person who filled in the form
  const mailOptionsToUser = {
    from: `"Tak Mat O Tur" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Tack för att du kontaktade oss!",
    text: `Vad roligt att du kontaktat oss på Tak Mat O Tur.\n\nVi svarar på ert önskemål så fort vi bara kan.\n\nMed vänliga hälsningar,\nTak Mat O Tur`,
    html: `
      <div style="background-color:#ffffff; color:#000000; padding:10px; text-align:center; width:400px; border-radius:8px; font-size:16px; font-family: 'Montserrat', sans-serif;">
        <!-- Import the Montserrat font -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet">
        <h2 style="color:black;">Vad roligt att du kontaktat oss på Tak Mat O Tur.</h2> 
        <p style="color:black;">Vi svarar på ert önskemål så fort vi bara kan.</p>
        <br><img width="100px" src="cid:takmatturlogo" alt="Tak Mat O Tur Logo">
        <br>
        <p style="color:black;">Med vänliga hälsningar,<br>Tak Mat O Tur</p> 
      </div>`,
    attachments: [
      {
        filename: "logooo.jpg",
        path: pathJoin(__dirname, "../client/src/img/header/logooo.jpg"),
        cid: "takmatturlogo",
      },
    ],
  };

  // Send the email to the owner first
  transporter.sendMail(mailOptionsToOwner, (error, info) => {
    if (error) {
      console.error("Error sending email to owner:", error);
      return res.status(500).send("Error sending email to owner");
    } else {
      console.log("Email sent to owner:", info.response);
      // If email to owner was successful, attempt to send the confirmation email to the user
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
