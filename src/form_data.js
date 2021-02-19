const fieldsForAddGame = [
  {
    field: 'game',
    text: 'Game: ',
    type: 'text',
    required: 'true',
  },
];

const fieldsForSetScore = [
  {
    field: 'user',
    text: 'User: ',
    type: 'text',
    required: 'true',
  },
  {
    field: 'score',
    text: 'Score: ',
    type: 'number',
    required: 'true',
  },
];

export { fieldsForAddGame, fieldsForSetScore };
