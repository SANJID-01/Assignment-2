export const getMovies = async (query) => {
  let url = "https://api.tvmaze.com/shows";

  if (query) {
    url = `https://api.tvmaze.com/search/shows?q=${query}`;
  }

  const result = await fetch(url);
  const data = await result.json();

  if (query) {
    return data.map((item) => item.show);
  }

  return data;
};
