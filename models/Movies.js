import mongoose from "mongoose";

// Define Schema

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: { type: Array, required: true },
    isActive: { type: Boolean, required: true },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now() } }]
})

// Create model
const MovieModel = mongoose.model("Movie", movieSchema);

// Create Document

const createDoc = async () => {
    try {

        const m1 = new MovieModel({
            name: "Extraction 2",
            ratings: 4,
            money: 60000,
            genre: ["action", "adventure"],
            isActive: true,
            comments: [{ value: "That was an Amazing movie dwag" }]
        })
        const result = await m1.save();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
};
export { createDoc };