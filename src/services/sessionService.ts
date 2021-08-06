import { getRepository } from "typeorm";

import Sessions from "../entities/Session";

interface Session {
  userId: number;
  token: string;
}

export async function createSession(token: string, userId: number) {
  try {
    const session: Session = {
      userId,
      token,
    };
    const result = await getRepository(Sessions).insert(session);

    return result;
  } catch (e) {
    return null;
  }
}
