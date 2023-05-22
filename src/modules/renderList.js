export default (list) => {
  const container = document.querySelector('.scores-container');

  while (container.children[0]) {
    container.removeChild(container.children[0]);
  }

  list.forEach((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.textContent = `${item.name}: ${item.score}`;
    container.appendChild(scoreItem);
  });
};
