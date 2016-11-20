import { NSObject, INSLayer, INSLayerStyle } from "../ns";

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

class Frame {
  public midX = 0;
  public midY = 0;
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

  }

  style(): LayerStyles {
    return this._styles;
  }

  documentData() {
    return new DocumentData();
  }

}
