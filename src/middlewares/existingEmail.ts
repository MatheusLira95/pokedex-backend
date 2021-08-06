import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../entities/User";

export default async function existingEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const users = await getRepository(User).find({ where: { email } });
  if (users.length !== 0) {
    return res.sendStatus(409);
  }

  next();
}
