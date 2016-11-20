import { NSObject } from "./ns";

export interface Point {
  x: number;
  y: number;
}

export enum MOVE_MODE {
  RELATIVE = 1,
  ABSOLUTE = 2
}

export enum MIRROR_DIRECTION {
  HORIZONTAL = 1,
  VERTICAL = 2
}

export default class BaseLayer {
  protected object;
  public type: number;
  private _width = 0;
  private _height = 0;

  constructor(object: NSObject) {
    this.object = object;
  }

  frame() {
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

  get position(): Point {
    const frame = this.object.frame();
    const midX = frame.midX;
    const midY = frame.midY;

    return {
      x: midX,
      y: midY
    }
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

    this.object.frame().midX = isRelative ? pos.x + x : x;
    this.object.frame().midY = isRelative ? pos.y + y : y;

    return this;
  }

  mirror(direction: number) {
    return this;
  }

}
