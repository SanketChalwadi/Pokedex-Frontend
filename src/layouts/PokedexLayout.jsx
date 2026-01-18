export default function PokedexLayout({ children }) {
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
        py-4
      "
    >
      <div
        className="
          w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          bg-red-600
          rounded-xl
          shadow-2xl
          p-3
          sm:p-4
          border-4
          border-red-800
        "
      >
        {/* Top lights */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>

        {/* Screen */}
        <div
          className="
            bg-gray-900
            rounded-lg
            p-3
            sm:p-4
            text-green-200
            font-mono
            text-xs
            sm:text-sm
            overflow-y-auto
            max-h-[80vh]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
