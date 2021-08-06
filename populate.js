const axios = require("axios");
const pg = require("pg");
require("dotenv").config();

const { Pool } = pg;
const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
const connection = new Pool(config);
async function populateDb() {
  let id = 1;
  while (id < 151) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = {
      name: data.name,
      number: data.id,
      image: data.sprites.front_default,
      weight: data.weight,
      height: data.height,
      baseExp: data.base_experience,
      description: data.types[0].type.name,
    };

    await connection.query(
      `INSERT INTO pokemon (name, number, image, weight, height, "baseExp", description, "inMyPokemons") 
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        data.name,
        data.id,
        data.sprites.front_default,
        data.weight,
        data.height,
        data.base_experience,
        data.types[0].type.name,
      ]
    );
    console.log(pokemon);
    id++;
  }
}

populateDb();
