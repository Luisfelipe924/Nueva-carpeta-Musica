import Cancion from "../models/Cancion.js";

export const crearCancion = async (req, res) => {
    console.log("Body recibido:", req.body);
    try {
        const nuevaCancion = new Cancion(req.body);
        const guardada = await nuevaCancion.save();
        res.status(201).json(guardada);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ errores: error.errors });
        }
        res.status(500).json({ error: "Error al crear la canción" });
    }
};

export const obtenerCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();
        res.json(canciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener canciones" });
    }
};

export const obtenerCancionPorId = async (req, res) => {
    try {
        const cancion = await Cancion.findById(req.params.id);
        if (!cancion) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }
        res.json(cancion);
    } catch (error) {
        res.status(400).json({ error: "ID no válido" });
    }
};

export const editarCancion = async (req, res) => {
    try {
        const actualizada = await Cancion.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!actualizada) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }

        res.json(actualizada);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ errores: error.errors });
        }
        res.status(400).json({ error: "Error al actualizar" });
    }
};

export const eliminarCancion = async (req, res) => {
    try {
        const eliminada = await Cancion.findByIdAndDelete(req.params.id);
        if (!eliminada) {
            return res.status(404).json({ error: "Canción no encontrada" });
        }
        res.json({ mensaje: "Canción eliminada con éxito" });
    } catch (error) {
        res.status(400).json({ error: "ID no válido" });
    }
};
