import * as userService from "../services/user.services.js";
import * as petService from "../services/pet.services.js";
import { dataMock } from "../services/mock.services.js";

export const createUser = async (req, res) => {
  try {
    const { cant } = req.query;
    const response = await userService.createUsersMock(cant);
    res.json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const createPet = async (req, res) => {
  try {
    const { cant } = req.query;
    const response = await petService.createPetsMock(cant);
    res.json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const createData = async (req, res) => {
  try {
      const { cant } = req.query;
      const users = await userService.createUsersMock(cant);
      const pets = await petService.createPetsMock(cant);
      res.json(users, pets);
  } catch (error) {
    console.error("Error al generar datos:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
};
