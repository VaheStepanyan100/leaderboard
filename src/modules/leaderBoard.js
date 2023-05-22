export default class LeaderBoard {
  constructor() {
    this.list = [];
  }

  addItem(name, score) {
    const newItem = {
      name,
      score,
    };
    this.list.push(newItem);
  }
}
