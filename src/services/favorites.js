export const getFavorites = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const toggleFavorite = (name) => {
  const favs = getFavorites();
  const updated = favs.includes(name)
    ? favs.filter(p => p !== name)
    : [...favs, name];

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
};
