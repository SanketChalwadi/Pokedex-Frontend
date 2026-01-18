import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function PokedexList() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("kanto"); // 🆕 region filter


  useEffect(() => {
    api.get(`/pokemon/region/${region}`).then(res => setList(res.data.results));
  }, [region]);

  const filtered = list.filter(p =>
    p.name.includes(search.toLowerCase())

    
  );

  return (
    <>
      {/* 🔍 Search */}
      <input
        className="w-full p-2 sm:p-3 border rounded mb-3 text-black text-xs sm:text-sm"
        placeholder="Search Pokémon..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* 🌍 Region Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 text-[10px] sm:text-xs">
        {["kanto","johto","hoenn","sinnoh","unova","kalos","alola","galar"].map(r => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-3 py-1 rounded capitalize border transition ${
              region === r ? "bg-red-600 text-white" : "bg-white text-black"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* 📱 RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {filtered.map(p => {
          const id = p.url.split("/").filter(Boolean).pop();

          return (
            <Link
              key={p.name}
              to={`/pokemon/${p.name}`}
              className="
                bg-white
                p-3 sm:p-4
                rounded
                shadow
                hover:bg-red-50
                flex items-center justify-between
                pokemon-font
                text-black
                text-[10px] sm:text-xs md:text-sm
              "
            >
              {/* NAME */}
              <span className="capitalize truncate">
                {p.name}
              </span>

<div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    alt={p.name}
    className="w-full h-full object-contain pixelated"
    onError={(e) => {
      e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
    }}
  />
</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
