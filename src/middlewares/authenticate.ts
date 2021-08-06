import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import Sessions from "../entities/Session";

export default async function verificaToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  const token = authorization.split("Bearer ")[1];
  const repository = getRepository(Sessions);
  const session = await repository.findOne({ token });

  if (!session) {
    return res.sendStatus(401);
  }
  next();
}
