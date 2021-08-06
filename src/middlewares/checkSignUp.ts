import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../schemas/signUpSchema";

export default async function checkSignUp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validation = signUpSchema.validate(req.body);
  if (validation.error) {
    return res.sendStatus(400);
  }
  next();
}
