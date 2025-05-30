import { Schema, model } from "mongoose";

const petsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const PetsModel = model("pets", petsSchema);
