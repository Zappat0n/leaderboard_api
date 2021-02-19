const storageManager = () => {
  const load = () => {
    const storage = localStorage.getItem('games');

    try {
      return storage ? JSON.parse(storage) : [];
    } catch (ex) {
      return [];
    }
  };

  const games = load();
  let currentGame;

  const save = () => {
    localStorage.setItem('games', JSON.stringify(games));
  };

  return {
    currentGame, load, games, save,
  };
};

export { storageManager as default };
