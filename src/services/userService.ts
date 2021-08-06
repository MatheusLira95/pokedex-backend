import { getRepository } from "typeorm";
import bcrypt, { hash } from "bcrypt";
import { v4 as uuid } from "uuid";

import User from "../entities/User";
import * as sessionService from "../services/sessionService";

export async function getUsers() {
  const users = await getRepository(User).find({
    select: ["id", "email"],
  });

  return users;
}
interface UserCreate {
  email: string;
  password: string;
}
export async function createUser(email: string, password: string) {
  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    const user: UserCreate = {
      email,
      password: hashPassword,
    };
    const result = await getRepository(User).insert(user);

    return user;
  } catch (e) {
    return null;
  }
}

export async function getUserByEmail(email: string, password: string) {
  const user = await getRepository(User).findOne({ where: { email } });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();

    await sessionService.createSession(token, user.id);

    return token;
  } else {
    return null;
  }
}
