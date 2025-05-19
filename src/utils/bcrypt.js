import { hashSync, compareSync, genSaltSync } from "bcrypt";

// Encripta la contraseña con un salt de 10 rondas
export const createHash = (password) => hashSync(password, genSaltSync(10));

// Compara una contraseña con un hash
export const isValidPassword = (password, hash) => compareSync(password, hash);
