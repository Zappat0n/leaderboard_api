import './css/styles.scss';
import requests from './requestManager';
import viewHelper from './views/helper';
import { fieldsForAddGame, fieldsForSetScore } from './views/form_data';
import gamesView from './views/games';
import storageManager from './storage';

const storage = storageManager();

console.log(storage.load());
const designer = viewHelper(storage);

const body = document.querySelector('body');

designer.addElement(body, 'h1', 'LeaderBoard API');
designer.addElement(body, 'div', null, ['game-container']);
designer.addElement(body, 'div', null, ['warnings']);

const container = designer.addElement(body, 'div', null, ['container']);
gamesView(storage).display();

const gameFormContainer = designer.addElement(container, 'div', null, ['container-vert']);
designer.addElement(gameFormContainer, 'h2', 'Create game', null);

designer.createForm(gameFormContainer, 'game', 'form', fieldsForAddGame, requests.setGame, null);

const scoreContainer = designer.addElement(container, 'div', null, ['container-vert']);
designer.addElement(scoreContainer, 'h2', 'Send score', null);

designer.createForm(scoreContainer, 'score', 'form', fieldsForSetScore, requests.setScore, null);

const scoresContainer = designer.addElement(container, 'div', null, ['container-vert']);
designer.addElement(scoresContainer, 'h2', 'Leaderboard', null);
const button = designer.addElement(scoresContainer, 'button', 'Get Scores', ['button']);

button.addEventListener('click', () => {
  requests.getScores(storage);
});


const leaderboard = designer.addElement(body, 'div', null, ['leaderboard']);
designer.addElement(leaderboard, 'h2', 'LeaderBoard', ['title']);
designer.addElement(leaderboard, 'div', null, ['scores']);
