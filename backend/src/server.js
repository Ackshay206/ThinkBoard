import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware for parsing JSON bodies
app.use(cors({
    origin: '*',
}))
app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(PORT, () => {
    console.log("server started on PORT: 5001");
});

