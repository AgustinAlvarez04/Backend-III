import { PetsModel } from "../model/pets.model.js";
import { mocksPets } from "../utils/pets.utils.js";

export const createPetsMock = async (cant = 50) => {
  try {
    const pets = [];
    for (let i = 0; i < cant; i++) {
      const pet = mocksPets();
      pets.push(pet);
    }
    return await PetsModel.create(pets);
  } catch (error) {
    throw new Error(error);
  }
};

export const getPets = async () => {
  try {
    return await PetsModel.find({});
  } catch (error) {
    throw new Error(error);
  }
};
