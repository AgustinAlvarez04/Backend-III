import { fakerES as faker } from "@faker-js/faker";
import { createHash } from "../utils/bcrypt.js";

export const mocksUsers = () => {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: createHash("coder123"),
    role: Math.random() < 0.5 ? "user" : "admin",
    pets: [],
  };
};
