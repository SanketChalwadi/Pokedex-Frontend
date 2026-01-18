export default function DecorationsContainer() {
  return (
    <div className="hidden xl:block fixed inset-0 pointer-events-none z-0">

      {/* ================= LEFT SIDE ================= */}
      <div className="absolute left-6 top-0 h-full flex flex-col justify-center items-center gap-12 py-10">

        {/* Gym Leaders – LEFT */}
        <div className="flex flex-col gap-6">
          {["brock", "lt-surge", "koga", "blaine"].map(gym => (
            <img
              key={gym}
              src={`/pokeball/${gym}.png`}
              alt={gym}
              className="w-20 h-20 pixelated opacity-90"
            />
          ))}
        </div>

        {/* Elite Four – LEFT */}
        <div className="flex flex-col gap-6 mt-10">
          {["lorelei", "bruno"].map(e4 => (
            <img
              key={e4}
              src={`/pokeball/${e4}.png`}
              alt={e4}
              className="w-20 h-20 pixelated opacity-95"
            />
          ))}
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="absolute right-6 top-0 h-full flex flex-col justify-center items-center gap-12 py-10">

        {/* Gym Leaders – RIGHT */}
        <div className="flex flex-col gap-6">
          {["misty", "erika", "sabrina", "giovanni"].map(gym => (
            <img
              key={gym}
              src={`/pokeball/${gym}.png`}
              alt={gym}
              className="w-20 h-20 pixelated opacity-90"
            />
          ))}
        </div>

        {/* Elite Four – RIGHT */}
        <div className="flex flex-col gap-6 mt-10">
          {["agatha", "lance"].map(e4 => (
            <img
              key={e4}
              src={`/pokeball/${e4}.png`}
              alt={e4}
              className="w-20 h-20 pixelated opacity-95"
            />
          ))}
        </div>
      </div>

      {/* ================= TRAINERS (BOTTOM) ================= */}
      <img
        src="/pokeball/trainer-red.png"
        alt="Trainer Red"
        className="absolute bottom-6 left-1/4 w-24 h-24 pixelated opacity-95"
      />

      <img
        src="/pokeball/trainer-blue.png"
        alt="Trainer Blue"
        className="absolute bottom-6 right-1/4 w-24 h-24 pixelated opacity-95"
      />
    </div>
  );
}
