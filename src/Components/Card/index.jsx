import React, { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function Card() {
  const [pokemon, setPokemon] = useState([]);
  const pokemonName = useParams();

  const getPokemonData = async (name) => {
    const api_fetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const results = await api_fetch.json();
    // console.log(results)

    const src = results.sprites.other["official-artwork"].front_default;
    const abilities = results.abilities.map((item) => "/ "+item.ability.name + " /");
    const types = results.types.map((item) => "/ "+item.type.name + " /");
    const pokeName = results.name;
    const stats = results.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));

    setPokemon({ pokeName, abilities, types, src, stats });
  };
  useEffect(() => {
    getPokemonData(pokemonName.name);
  }, [pokemonName.name]);

  console.log(pokemon);
  return (
    <>
      <div className="card-container">
        <h1 className="poke-name">{pokemon.pokeName}</h1>
        <div className="img-container">
          <img src={pokemon.src} alt="" />
        </div>
        <h1 className="abilities">Abilities: {pokemon.abilities}</h1>
        <h1 className="types">Types: {pokemon.types}</h1>
        <div className="stats-container">
          {pokemon.stats?.map((stat, i) => (
            <h3 key={i} className="stat">
              {stat.name}: {stat.base}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
