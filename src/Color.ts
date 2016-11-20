export default class Color {
  r: number;
  g: number;
  b: number;
  a: number;
  private _color: NSColor;

  constructor(red: number, green: number, blue: number, alpha?: number) {
    alpha = alpha || 1.0;

    this.r = red;
    this.g = green;
    this.b = blue;
    this.a = alpha;

    this._color = NSColor.colorWithRed_green_blue_alpha(red, green, blue, alpha);
  }

}
