export interface DocumentData {
  layerWithID_(id: number | string): any;
}

export interface NSObject {
  objectID(): number;
  setName_(name: string);
  name(): string;
  documentData(): DocumentData;
  document: NSAlerter;
}

export interface NSAlerter {
  showMessage(message: string);
}

export interface NSText extends NSObject {
  textAlignment: number;
  stringValue: string;
  textBehaviour: number;
  setIsEditingText(active: boolean);
  addAttribute_value_forRange(attribute: string, value: any, range: NSRange);
}

export interface INSLayerStyle {
  fills(): any[];
}

export interface NSRange {
  location: number;
  length: number;
}

export interface SketchFrame {
  midX(): number;
  midY(): number;
  midX: number;
  midY: number;
  width(): number;
  height(): number;
}

export interface INSLayer extends NSObject {
  multiplyBy(factor: number);
  frame(): SketchFrame;
  style(): INSLayerStyle;
}

export interface NSColor {
  red(): number;
  green(): number;
  blue(): number;
  alpha(): number;
}

export interface NSFill {
  isEnabled(): boolean;
  fillType(): string;
  color(): NSColor;
  gradient(): void;
}
