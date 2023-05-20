import './style.css';

import LeaderBoard from './modules/leaderBoard.js';
import listScores from './modules/renderList.js';

const newLB = new LeaderBoard();
listScores(newLB.list);

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', () => {
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');
  if (name.value !== '' && score.value !== '') {
    newLB.addItem(name.value, score.value);
    name.value = '';
    score.value = '';
    listScores(newLB.list);
  }
});
