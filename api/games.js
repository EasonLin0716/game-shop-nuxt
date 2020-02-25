export const gamesApi = {
  getGames(page, numberOfGames) {
    return fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games?page=${page}&page_size=${numberOfGames}`,
      {
        cache: "force-cache",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "df9c3409b4msh89ef02b0674a831p191099jsn8acd6e8b2ff2"
        },
        method: "GET"
      }
    ).then(response => response.json());
  },
  getGame(id) {
    return fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${id}`,
      {
        cache: "force-cache",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "df9c3409b4msh89ef02b0674a831p191099jsn8acd6e8b2ff2"
        },
        method: "GET"
      }
    ).then(response => response.json());
  }
};
