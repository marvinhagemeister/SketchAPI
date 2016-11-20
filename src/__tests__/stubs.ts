class LayerStyles implements INSLayerStyle {
  fills(): any[] {
    return [];
  };
}

class DocumentData {
  layerWithID_(id: any) {
    return "whatever";
  }
}

class Frame implements SketchFrame {
  public midX = 0;
  public midY = 0;
  public width = 0;
  public height = 0;
}

export class NSLayer implements INSLayer {
  x: number;
  y: number;
  private _name: string;
  private _styles: LayerStyles;
  private _frame: Frame;
  public document = {
    showMessage(message: string): void {
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

  setName_(name: string) {
    this._name = name;
  }

  name() {
    return this._name;
  }

  multiplyBy(factor: number) {
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
