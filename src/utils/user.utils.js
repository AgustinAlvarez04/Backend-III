import { fakerES as faker } from "@faker-js/faker";

export const generateUser = () => {         //Genera usuarios tomando el modelo que creamos en model/user aleatoriamente
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.url(),
  };
};

// console.log(generateUser())