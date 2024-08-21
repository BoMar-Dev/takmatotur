import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";
import coachRoute from "./routes/coachRoute.js";
import accomodationRoute from "./routes/accomodationRoute.js";
import tourRoute from "./routes/tourRoute.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'client/src/img' directory
app.use("/img", express.static("client/src/img"));

// Use routes
app.use(contactRoute);
app.use(coachRoute);
app.use(accomodationRoute);
app.use(tourRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Well hello there server. You are running on port ${PORT}`);
});
