export default class Rectangle {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  asCGRect() {
    // return CGRectMake(this.x, this.y, this.width, this.height);
  }
}
