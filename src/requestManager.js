import { createGameRequest, getScoresRequest, setScoreRequest } from './requests';

const requests = {
  setGame(element) {
    const data = {
      name: element.name,
    };

    const request = createGameRequest(data);
    fetch(request)
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setScore(element) {
    const id = 'JJbaGvhdosr9PTKcIzKO';
    const data = {
      user: element.user.value,
      score: element.score.value,
    };
    const request = setScoreRequest(id, data);
    fetch(request)
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getScores() {
    const id = 'JJbaGvhdosr9PTKcIzKO';
    const request = getScoresRequest(id);
    fetch(request)
      .then((response) => {
        console.log(response.json());
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default requests;
