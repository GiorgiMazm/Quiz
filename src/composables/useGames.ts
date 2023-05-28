import Game from "~/types/Game";
import games from "../data/games.json";
import { plainToInstance } from "class-transformer";

export default () => {
  const gameList: Game[] = plainToInstance(Game, games);
  return { gameList };
};
