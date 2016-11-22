export interface Point {
  x: number;
  y: number;
}

export enum MOVE_MODE {
  RELATIVE = 1,
  ABSOLUTE = 2
}

export enum FLIP_DIRECTION {
  HORIZONTAL = 1,
  VERTICAL = 2
}

export default class BaseLayer {
  protected object: INSLayer;
  public type: number;
  private _width = 0;
  private _height = 0;

  constructor(object: INSLayer) {
    this.object = object;
  }

  frame(): SketchFrame {
    return this.object.frame();
  }

  get width() {
    return this._width;
  }

  set width(width: number) {
    const frame = this.object.frame();
    frame.width = width;
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height: number) {
    const frame = this.object.frame();
    frame.height = height;
    this._height = height;
  }

  get id() {
    return this.object.objectID();
  }

  set name(name: string) {
    this.object.setName_(name);
  }

  get name() {
    return this.object.name();
  }

  findById(id: number) {
    const layer = this.object.documentData().layerWithID_(id);
    if (layer) {
      return layer;
    }

    return null;
  }

  findByName(name: string) {
    return this.findById(parseInt(name));
  }

  set position(point: Point) {
    const frame = this.object.frame();
    frame.midX = point.x;
    frame.midY = point.y;
  }

  get position(): Point {
    const frame = this.object.frame();

    return {
      x: frame.midX,
      y: frame.midY
    };
  }

  scale(factor: number) {
    const { x, y } = this.position;

    this.object.multiplyBy(factor);
    this.move(x, y, MOVE_MODE.ABSOLUTE);

    return this;
  }

  move(x: number, y: number, mode?: number) {
    const pos = this.position;
    const isRelative = typeof mode === "undefined"
      || mode === MOVE_MODE.RELATIVE;

    x = isRelative ? pos.x + x : x;
    y = isRelative ? pos.y + y : y;

    this.position = { x, y };

    return this;
  }

  rotate(degree: number) {

    return this;
  }

  flip(direction: number) {
    if (direction === FLIP_DIRECTION.HORIZONTAL) {

    } else {

    }

    return this;
  }

}
