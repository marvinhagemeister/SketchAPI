import { NSObject, INSLayer, INSLayerStyle, SketchFrame } from "../ns";

class LayerStyles implements INSLayerStyle {
  fills(): any[] {
    return [];
  };
}

class DocumentData {
  layerWithID_(id) {
    return "whatever";
  }
}

class Frame implements SketchFrame {
  public midX = 0;
  public midY = 0;
  public _width = 0;
  public _height = 0;

  width() {
    return this._width;
  }

  height() {
    return this._height;
  }
}

export class NSLayer implements INSLayer {
  x: number;
  y: number;
  private _name: string;
  private _styles: LayerStyles;
  private _frame;
  public document = {
    showMessage(message): void {
    }
  };

  constructor() {
    this._styles = new LayerStyles();
    this._frame = new Frame();
  }

  frame() {
    return this._frame;
  }

  objectID() {
    return 1;
  }

  setName_(name) {
    this._name = name;
  }

  name() {
    return this._name;
  }

  multiplyBy(factor) {
    const frame = this._frame;
    const width = frame.width === 0 ? 1 : frame.width;
    const height = frame.height === 0 ? 1 : frame.height;

    frame.width = width * factor;
    frame.height = height * factor;
  }

  style(): LayerStyles {
    return this._styles;
  }

  documentData() {
    return new DocumentData();
  }

}
