export default class Range {
  location: number = 0;
  length: number;

  constructor(start, end) {
    this.location = start;
    this.length = end - start;
  }
}
