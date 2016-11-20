declare class NSColor {
  red(): number;
  green(): number;
  blue(): number;
  alpha(): number;
  static colorWithRed_green_blue_alpha(red: number, green: number, blue: number, alpha: number): NSColor;
}

declare class NSRange {
  constructor(start: number, end: number);
  location: number;
  length: number;
}

declare interface DocumentData {
  layerWithID_(id: number | string): any;
}

declare interface NSAlerter {
  showMessage(message: string): void;
}

declare class NSObject {
  objectID(): number;
  setName_(name: string): void;
  name(): string;
  documentData(): DocumentData;
  document: NSAlerter;
}

declare class NSFill {
  isEnabled(): boolean;
  fillType(): string;
  color(): NSColor;
  gradient(): void;
}

declare interface INSLayerStyle {
  fills(): any[];
}

declare interface SketchFrame {
  midX(): number;
  midY(): number;
  midX: number;
  midY: number;
  width: number;
  height: number;
}

declare class INSLayer extends NSObject {
  multiplyBy(factor: number): void;
  frame(): SketchFrame;
  style(): INSLayerStyle;
}

declare class NSText extends INSLayer {
  textAlignment: number;
  stringValue: string;
  textBehaviour: number;
  setIsEditingText(active: boolean): void;
  addAttribute_value_forRange(attribute: string, value: any, range: NSRange): void;
}

declare class MSLayerGroup {
  static new(): any;
  groupBoundsForLayers(layers: any): any;
}

declare class NSUserDefaults {
  static standardUserDefaults(): any;
}

declare class NSBezierPath {
  static bezierPath(): any;
}

declare class MSShapeGroup {
  shapeWithBezierPath(path: any): any;
}

declare function NSMakePoint(x: number, y: number): any;
declare function NSMakeRect(x: number, y: number, width: number, height: number): any;
