import { Request, Response } from "express";

import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response) {
  try {
    const pokemons = await pokemonService.getPokemons();
    res.send(pokemons);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function addPokemon(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function removePokemon(req: Request, res: Response) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
