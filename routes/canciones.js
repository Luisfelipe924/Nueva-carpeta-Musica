import express from "express";
import {crearCancion,obtenerCanciones,obtenerCancionPorId,editarCancion,eliminarCancion} 
from "../controllers/cancionesController.js";

const router = express.Router();

router.post("/", crearCancion);
router.get("/", obtenerCanciones);
router.get("/:id", obtenerCancionPorId);
router.put("/:id", editarCancion);
router.delete("/:id", eliminarCancion);


export default router;

