import axios from "axios";

function populateDb() {
  const id = 1;

  axios.get(`https://pokeapi.co/api/v2/ability/${id}`).then((resp) => {
    const pokemon = resp.data;
    console.log("Olá");
  });
}

populateDb();
