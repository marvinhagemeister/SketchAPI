export default class Range {
  location: number = 0;
  length: number;

  constructor(start: number, end: number) {
    this.location = start;
    this.length = end - start;
  }
}
