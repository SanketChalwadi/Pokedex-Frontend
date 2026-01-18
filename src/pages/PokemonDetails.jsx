import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { getFavorites, toggleFavorite } from "../services/favorites";
import { typeColors } from "../utils/typeColors";
import StatBar from "../components/StatBar";
import EvolutionChain from "../components/EvolutionChain";

export default function PokemonDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [shiny, setShiny] = useState(false);   // add at top with states
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(res => setPokemon(res.data));
    api.get(`/pokemon/species/${name}`).then(res => setSpecies(res.data));
  }, [name]);

  if (!pokemon) return <p className="text-black">Loading...</p>;

  const isFav = favorites.includes(pokemon.name);

  const playCry = () => {
    const audio = new Audio(
      pokemon.cries?.latest || pokemon.cries?.legacy
    );
    audio.play();
  };

  const getDescription = () => {
    if (!species) return "";
    const entry = species.flavor_text_entries.find(
      e => e.language.name === "en"
    );
    return entry?.flavor_text.replace(/\f/g, " ");
  };

  return (
    <>
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-3 sm:mb-4 text-blue-600 font-medium text-sm sm:text-base"
      >
        ← Back
      </button>

      <div
        className="
          bg-white
          p-3
          sm:p-5
          rounded-xl
          shadow
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-xl
          mx-auto
          text-black
        "
      >
        {/* Name + Favorite */}
        <div className="flex justify-between items-center gap-2">
          <h2 className="pokemon-font text-sm sm:text-lg capitalize text-black">
            {pokemon.name}
          </h2>

          <button
            onClick={() =>
              setFavorites(toggleFavorite(pokemon.name))
            }
            className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium ${
              isFav ? "bg-yellow-400" : "bg-gray-200"
            }`}
          >
            {isFav ? "⭐ Favorite" : "☆ Add"}
          </button>
        </div>
        


        {/* Artwork */}
<img
  src={
    shiny
      ? pokemon.sprites.other["official-artwork"].front_shiny
      : pokemon.sprites.other["official-artwork"].front_default
  }
  alt={pokemon.name}
  className="w-36 sm:w-44 md:w-52 mx-auto my-3"
/>

<button
  onClick={() => setShiny(!shiny)}
  className="block mx-auto mb-3 px-3 sm:px-4 py-1 bg-purple-600 text-white rounded text-xs sm:text-sm"
>
  ✨ {shiny ? "Normal" : "Shiny"}
</button>

        

        {/* Cry */}
        <button
          onClick={playCry}
          className="
            block
            mx-auto
            mb-3
            px-3
            sm:px-4
            py-1
            bg-blue-600
            text-white
            rounded
            text-xs
            sm:text-sm
          "
        >
          🔊 Play Cry
        </button>

        {/* Types */}
        <div className="flex gap-2 justify-center my-3 flex-wrap">
          {pokemon.types.map(t => (
            <span
              key={t.type.name}
              className={`px-2 sm:px-3 py-1 rounded text-white capitalize text-xs sm:text-sm ${
                typeColors[t.type.name] || "bg-gray-400"
              }`}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {/* Pokédex Entry */}
        {species && (
          <>
            <h3 className="mt-4 font-bold text-black text-sm sm:text-base">
              Pokédex Entry
            </h3>

            <p className="mt-2 text-xs sm:text-sm italic text-black leading-relaxed">
              {getDescription()}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 text-xs sm:text-sm text-black">
              <p>
                <b>Habitat:</b>{" "}
                <span className="capitalize text-black">
                  {species.habitat?.name || "Unknown"}
                </span>
              </p>

              <p>
                <b>Generation:</b>{" "}
                <span className="uppercase text-black">
                  {species.generation.name.replace("-", " ")}
                </span>
              </p>
            </div>
          </>
        )}

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mt-4 text-black">
          <p><b>Height:</b> {pokemon.height}</p>
          <p><b>Weight:</b> {pokemon.weight}</p>
        </div>

        {/* Abilities */}
        <h3 className="mt-5 font-bold text-black text-sm sm:text-base">
          Abilities
        </h3>
        <ul className="list-disc ml-5 text-black text-xs sm:text-sm">
          {pokemon.abilities.map(a => (
            <li key={a.ability.name} className="capitalize">
              {a.ability.name}
            </li>
          ))}
        </ul>

        {/* Base Stats */}
        <h3 className="mt-5 font-bold text-black text-sm sm:text-base">
          Base Stats
        </h3>
        <div className="mt-2">
          {pokemon.stats.map(s => (
            <StatBar
              key={s.stat.name}
              name={s.stat.name}
              value={s.base_stat}
            />
          ))}
        </div>

        {/* Moves */}
        <h3 className="mt-5 font-bold text-black text-sm sm:text-base">
          Moves
        </h3>
        <div
          className="
            h-40
            sm:h-48
            overflow-y-auto
            border
            rounded
            p-2
            text-xs
            sm:text-sm
            text-black
          "
        >
          {pokemon.moves.map(m => (
            <div
              key={m.move.name}
              className="capitalize py-1 border-b last:border-b-0"
            >
              {m.move.name}
            </div>
          ))}
        </div>

        {/* Evolution Chain */}
        <h3 className="mt-5 font-bold text-black text-sm sm:text-base"></h3>
        <EvolutionChain name={pokemon.name} />
      </div>
    </>
  );
}
