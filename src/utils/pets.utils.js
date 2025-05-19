import { fakerES as faker } from "@faker-js/faker";

export const mocksPets = () => {
    return {
        name: faker.animal.cat(),
        specie: faker.animal.type(),
        image: faker.image.url(),
    }
};
