import postNewScore from './postNewScore.js';
import refresh from './refresh.js';

export default (newLB, gameID) => {
  const refreshBtn = document.querySelector('.refresh');
  refreshBtn.addEventListener('click', () => {
    refresh(newLB, gameID);
  });

  const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', () => {
    const name = document.querySelector('.name');
    const score = document.querySelector('.score');
    if (name.value !== '' && score.value !== '') {
      postNewScore(gameID, name.value, score.value);
      name.value = '';
      score.value = '';
    }
  });
};
