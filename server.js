import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cancionesRoute from "./routes/canciones.js";

dotenv.config()
const app = express();

app.use(express.json());
app.use("/api/canciones", cancionesRoute);
app.get("/", (req, res) => {
res.send("API de Música funcionando correctamente");
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
.connect(MONGO_URI)
.then(() => {
    console.log("conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
})
.catch((err) => console.error("Error al conectar MongoDB:", err));