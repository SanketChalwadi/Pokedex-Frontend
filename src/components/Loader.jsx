export default function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded shadow animate-pulse flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
