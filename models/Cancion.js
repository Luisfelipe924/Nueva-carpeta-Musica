import mongoose from "mongoose";

const CancionSchema = new mongoose.Schema({
titulo: {
    type: String,
    required: [true, "El título es obligatorio"],
    minlength: [6, "El título debe tener mínimo 6 caracteres"],
    maxlength: [255, "El título no puede superar 255 caracteres"]
},
artista: {
    type: String,
    required: [true, "El artista es obligatorio"],
    minlength: [10, "El nombre del artista debe tener mínimo 10 caracteres"],
    maxlength: [255, "El nombre del artista no puede superar 255 caracteres"]
},
anioLanzamiento: {
    type: Number,
    required: [true, "El año de lanzamiento es obligatorio"],
    validate: {
    validator: function (v) {
        return /^[0-9]{4}$/.test(v); 
    },
    message: "El año debe tener exactamente 4 dígitos"
    }
},
genero: {
    type: String,
    required: [true, "El género es obligatorio"]
}
}, { timestamps: true });

export default mongoose.model("Cancion", CancionSchema);