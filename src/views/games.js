import viewHelper from './helper';

const gamesView = (storage) => {
  const display = () => {
    const container = document.querySelector('.game-container');
    container.innerHTML = '';
    storage.games.forEach((game) => {
      const element = viewHelper().addElement(container, 'p', game.name, ['game-item']);
      element.addEventListener('click', () => {
      });
    });
  };

  return { display };
};

export default gamesView;
