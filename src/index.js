import './css/styles.scss';
import requests from './requestManager';
import designer from './view_designer';
import { fieldsForAddGame, fieldsForSetScore } from './form_data';

designer().addElement(document.querySelector('body'), 'h1', 'LeaderBoard API');
const container = designer().addElement(document.querySelector('body'), 'div', null, ['container']);
const gameContainer = designer().addElement(container, 'div', null, ['container-vert']);
designer().addElement(gameContainer, 'h2', 'Create game', null);

designer().createForm(gameContainer, 'game', 'form', fieldsForAddGame, requests.setGame, null);

const scoreContainer = designer().addElement(container, 'div', null, ['container-vert']);
designer().addElement(scoreContainer, 'h2', 'Send score', null);

designer().createForm(scoreContainer, 'score', 'form', fieldsForSetScore, requests.setScore, null);

const scoresContainer = designer().addElement(container, 'div', null, ['container-vert']);
designer().addElement(scoresContainer, 'h2', 'Leaderboard', null);
const button = designer().addElement(scoresContainer, 'button', 'Get Scores', ['button']);

button.addEventListener('click', () => {
  requests.getScores();
});
