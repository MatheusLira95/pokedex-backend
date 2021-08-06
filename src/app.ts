import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import checkSignUp from "./middlewares/checkSignUp";
import checkSignIn from "./middlewares/checkSignIn";
import existingEmail from "./middlewares/existingEmail";

import * as userController from "./controllers/userConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", userController.getUsers);

app.post("/sign-up", checkSignUp, existingEmail, userController.createUser);

app.post("/sign-in", checkSignIn, userController.authorizate);

export async function init() {
  await connectDatabase();
}

export default app;
