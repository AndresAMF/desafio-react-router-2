import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../Api/getApi";
import "./style.css";

function Personajes() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(`/Personajes/${selectedPokemon}`);
  };

  const getPokemons = async () => {
    const pokemon = await getApi();
    const filteredData = pokemon.map((item) => ({
      name: item.name,
      url: item.url,
    }));
    setPokemon(filteredData);
    console.log(pokemon);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="pokemons-container">
      <h1 className="pokemons-title">Select a pokemon</h1>
      <div className="select-button-container">
        <select
          className="select-box"
          value={selectedPokemon}
          onChange={({ target }) => setSelectedPokemon(target.value)}
        >
          <option>Pokemons</option>
          {pokemon.map((pokemon, index) => {
            return <option key={index}>{pokemon.name}</option>;
          })}
        </select>

        <button className="pokemons-button" onClick={buttonHandler}>
          {" "}
          Show more!{" "}
        </button>
      </div>
    </div>
  );
}

export default Personajes;
