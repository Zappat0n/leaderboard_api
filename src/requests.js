const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createGameRequest = (body) => {
  return new Request(`${baseUrl}games`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(body),
  });
};

const getScoresRequest = (id) => {
  return new Request(`${baseUrl}games/${id}/scores/`, {
    method: 'GET',
  });
};

const setScoreRequest = (id, body) => {
  return new Request(`${baseUrl}games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(body),
  });
};

export { createGameRequest, getScoresRequest, setScoreRequest };
