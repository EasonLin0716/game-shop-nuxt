export const gamesApi = {
  getGames() {
    return fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      cache: "force-cache",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "df9c3409b4msh89ef02b0674a831p191099jsn8acd6e8b2ff2"
      },
      method: "GET"
    }).then(response => response.json());
  }
};
