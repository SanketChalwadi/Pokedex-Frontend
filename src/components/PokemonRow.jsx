export default function PokemonRow({ name, active }) {
  return (
    <div
      className={`
        capitalize
        text-black
        pokemon-font
        text-xs
        sm:text-sm
        px-3
        py-2
        rounded
        transition
        ${active ? "bg-gray-300 shadow-inner" : "bg-transparent"}
      `}
    >
      {name}
    </div>
  );
}
