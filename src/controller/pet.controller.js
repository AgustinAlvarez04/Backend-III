import * as petService from "../services/pet.services.js";

export const getPets = async (req, res) => {
  try {
    const response = await petService.getPets();
    res.json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
