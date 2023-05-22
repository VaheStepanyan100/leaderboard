import init from './init.js';
import LeaderBoard from './leaderBoard.js';
import newGameID from './newGameID.js';

export default async () => {
  const newLB = new LeaderBoard();
  const gameID = localStorage.getItem('ID') || (await newGameID());
  init(newLB, gameID);
};
