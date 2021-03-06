import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import checkSignUp from "./middlewares/checkSignUp";
import checkSignIn from "./middlewares/checkSignIn";
import existingEmail from "./middlewares/existingEmail";
import authenticate from "./middlewares/authenticate";

import * as userController from "./controllers/userController";
import * as pokemonController from "./controllers/pokemonController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", userController.getUsers);

app.post("/sign-up", checkSignUp, existingEmail, userController.createUser);

app.post("/sign-in", checkSignIn, userController.authorizate);

app.get("/pokemons", authenticate, pokemonController.getPokemons);

app.post("/my-pokemons/:id/add", authenticate, pokemonController.addPokemon);

app.post("/my-pokemons/:id/add", authenticate, pokemonController.removePokemon);

export async function init() {
  await connectDatabase();
}

export default app;
