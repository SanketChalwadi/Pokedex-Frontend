import { Link } from "react-router-dom";

export default function Favorites() {
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <>
      {/* Title */}
      <h2
        className="
          text-lg
          sm:text-xl
          font-bold
          mb-4
          text-white
          pokemon-font
        "
      >
        ⭐ Favorite Pokémon
      </h2>

      {/* Empty state */}
      {favs.length === 0 && (
        <p className="text-white text-xs sm:text-sm">
          No favorites yet.
        </p>
      )}

      {/* Favorites list */}
      <div className="flex flex-col gap-2">
        {favs.map(p => (
          <Link
            key={p}
            to={`/pokemon/${p}`}
            className="
              block
              capitalize
              bg-white
              p-3
              sm:p-4
              rounded
              shadow
              text-black
              hover:bg-red-50
              pokemon-font
              text-[10px]
              sm:text-xs
              md:text-sm
              transition-colors
            "
          >
            {p}
          </Link>
        ))}
      </div>
    </>
  );
}
