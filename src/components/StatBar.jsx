export default function StatBar({ name, value }) {
  const percent = Math.min((value / 255) * 100, 100);

  const getColor = () => {
    if (value >= 120) return "bg-green-500";
    if (value >= 70) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <div className="mb-3">
      {/* Label */}
      <div className="flex justify-between text-[11px] font-bold uppercase text-gray-700 mb-1">
        <span>{name.replace("-", " ")}</span>
        <span>{value}</span>
      </div>

      {/* GBA-style stat bar */}
      <div className="w-full h-3 bg-gray-300 border border-gray-500 rounded-sm overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
