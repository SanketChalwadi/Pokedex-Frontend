import { useState, useEffect } from "react";
import api from "../services/api";
import StatBar from "../components/StatBar";

export default function Compare() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [showList, setShowList] = useState(true);   // 🆕 added

  const fetchPokemon = async (name, setter) => {
    if (!name) return;
    const { data } = await api.get(`/pokemon/${name.toLowerCase()}`);
    setter(data);
  };

  useEffect(() => {
    api.get("/pokemon").then(res => setList(res.data.results));
  }, []);

  const filtered = list.filter(p =>
    p.name.includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded shadow text-black">
      <h2 className="pokemon-font mb-3 text-sm">Compare Pokémon</h2>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <input
          className="border p-2 text-xs"
          placeholder="First Pokémon"
          value={p1}
          onChange={e => setP1(e.target.value)}
        />
        <input
          className="border p-2 text-xs"
          placeholder="Second Pokémon"
          value={p2}
          onChange={e => setP2(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          fetchPokemon(p1, setD1);
          fetchPokemon(p2, setD2);
          setShowList(false); // 🆕 hide list after compare
        }}
        className="bg-blue-600 text-white px-3 py-1 rounded text-xs mb-4"
      >
        Compare
      </button>

      {/* Result */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[d1, d2].map((p, i) =>
          p && (
            <div key={i} className="text-center">
              <img src={p.sprites.front_default} className="mx-auto w-20" />
              <h3 className="capitalize pokemon-font text-xs">{p.name}</h3>

              {p.stats.map(s => (
                <StatBar
                  key={s.stat.name}
                  name={s.stat.name}
                  value={s.base_stat}
                />
              ))}
            </div>
          )
        )}
      </div>

      {/* Searchable Pokémon List */}
      {showList && (
        <>
          <input
            className="w-full border p-2 text-xs mb-2"
            placeholder="Filter Pokémon..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto text-xs">
            {filtered.map(p => (
              <button
                key={p.name}
                onClick={() => (!p1 ? setP1(p.name) : setP2(p.name))}
                className="bg-gray-100 hover:bg-red-200 p-2 rounded capitalize"
              >
                {p.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
