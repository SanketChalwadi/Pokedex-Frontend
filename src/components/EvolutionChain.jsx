import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const extractChain = (node, arr = []) => {
  arr.push(node.species.name);
  if (node.evolves_to.length > 0) {
    extractChain(node.evolves_to[0], arr);
  }
  return arr;
};

export default function EvolutionChain({ name }) {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    api.get(`/pokemon/evolution/${name}`).then(res => {
      const names = extractChain(res.data.chain);
      setChain(names);
    });
  }, [name]);

  if (!chain.length) return null;

  return (
    <>
      <h3 className="mt-6 font-bold text-black text-sm sm:text-base">
        Evolution Chain
      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-2
          sm:gap-4
          justify-center
          mt-3
        "
      >
        {chain.map(p => (
          <Link
            key={p}
            to={`/pokemon/${p}`}
            className="
              capitalize
              bg-gray-100
              px-3
              py-2
              rounded
              hover:bg-red-200
              text-black
              text-xs
              sm:text-sm
              pokemon-font
              transition
            "
          >
            {p}
          </Link>
        ))}
      </div>
    </>
  );
}
