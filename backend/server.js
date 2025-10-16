import express from "express";
import notesRoutes from "./src/controllers/routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
    console.log("server started on PORT: 5001");
});

