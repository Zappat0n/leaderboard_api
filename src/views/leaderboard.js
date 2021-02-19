import viewHelper from './helper';

const leaderboardView = () => {
  const display = (response) => {
    const container = document.querySelector('.scores');
    container.innerHTML = '';

    const scores = response.result;
    scores.forEach((score) => {
      viewHelper().addElement(container, 'p', `${score.user} : ${score.score}`, ['score']);
    });
  };

  return { display };
};

export default leaderboardView;
