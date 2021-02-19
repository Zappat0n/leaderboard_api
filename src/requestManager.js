import { createGameRequest, getScoresRequest, setScoreRequest } from './requests';
import game from './game';
import gamesView from './views/games';
import leaderboardView from './views/leaderboard';
import viewHelper from './views/helper';

const requests = {
  setGame(element, storage) {
    const data = {
      name: element.name,
    };
    const request = createGameRequest(data);
    fetch(request)
      .then((response) => response.json())
      .then((response) => {
        if (response.result.includes('ID:')) {
          const id = response.result.split(' ')[3];
          const g = game(data.name.value, id);
          storage.games.push(g);
          storage.save();
          storage.currentGame = id;
          gamesView(storage).display();
        } else {
          viewHelper().displayError(response.result);
        }
      })
      .catch((error) => viewHelper().displayError(error));
  },
  setScore(element, storage) {
    const data = {
      user: element.user.value,
      score: element.score.value,
    };
    const request = setScoreRequest(storage.currentGame, data);
    fetch(request)
      .then((response) => response.json())
      .then((response) => {
        viewHelper().displayError(response.result);
      })
      .catch((error) => viewHelper().displayError(error));
  },
  getScores(storage) {
    const request = getScoresRequest(storage.currentGame);
    fetch(request)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        leaderboardView().display(response);
      })
      .catch((error) => viewHelper().displayError(error));
  },
};

export default requests;
