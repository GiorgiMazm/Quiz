import Game from "~/types/Game";
import games from "../data/games.json";
import { plainToInstance } from "class-transformer";

export default () => {
  const gameList: Game[] = plainToInstance(Game, games);
  function getGameById(id: number) {
    return gameList.find((game) => game.id === id);
  }

  return { gameList, getGameById };
};
