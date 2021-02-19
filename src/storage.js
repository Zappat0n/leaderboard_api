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
    localStorage.setItem('projects', JSON.stringify(games));
  };

  return {
    currentGame, load, games, save,
  };
};

const storage = storageManager();

export { storage as default };
