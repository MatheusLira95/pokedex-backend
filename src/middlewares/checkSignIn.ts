import { NextFunction, Request, Response } from "express";
import { signInSchema } from "../schemas/signInSchema";

export default async function checkSignIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;
  const validation = signInSchema.validate({ email });
  if (validation.error) {
    return res.sendStatus(400);
  }
  next();
}
