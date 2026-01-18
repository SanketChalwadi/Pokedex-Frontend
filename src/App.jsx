import { Routes, Route, Link } from "react-router-dom";
import PokedexList from "./pages/PokedexList";
import PokemonDetails from "./pages/PokemonDetails";
import Favorites from "./pages/Favorites";
import SideDecorations from "./components/SideDecorations";
import Compare from "./pages/Compare";

/* 🆕 FireRed Pokédex Shell */
function PokedexShell({ children }) {
  return (
    <div
      className="
        min-h-screen 
        bg-red-700 
        flex 
        items-center 
        justify-center 
        px-2 
        sm:px-4 
        md:px-6
      "
    >
      <div
        className="
          w-full 
          max-w-[360px] 
          sm:max-w-md 
          md:max-w-lg 
          lg:max-w-xl
          bg-red-600 
          rounded-xl 
          shadow-2xl 
          p-3 
          sm:p-4 
          border-4 
          border-red-800
        "
      >
        {/* Top indicator lights */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full border-2 border-white" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>

        {/* Screen */}
        <div
          className="
            bg-gray-900 
            rounded-lg 
            p-2 
            sm:p-3 
            text-green-200 
            font-mono 
            text-xs 
            sm:text-sm
            max-h-[80vh]
            overflow-y-auto
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* 🆕 Side decorations */}
      <SideDecorations />

      <PokedexShell>
        <nav
          className="
            bg-red-800 
            text-white 
            px-3 
            py-2 
            sm:p-3 
            flex 
            justify-between 
            items-center
            rounded 
            mb-3
            text-xs
            sm:text-sm
          "
        >
          <Link to="/" className="font-bold tracking-widest">
            POKEDEX
          </Link>
          <Link to="/favorites">⭐ Favorites</Link>
          <Link to="/compare">⚔ Compare</Link>
        </nav>

        <Routes>
          <Route path="/" element={<PokedexList />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </PokedexShell>
    </>
  );
}
