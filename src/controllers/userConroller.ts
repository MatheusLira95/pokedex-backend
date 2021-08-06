import { Request, Response } from "express";

import * as userService from "../services/userService";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const result = await userService.createUser(email, password);

    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function authorizate(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const token = await userService.getUserByEmail(email, password);
    if (token === null) {
      return res.sendStatus(401);
    }
    res.status(200).send(token);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
