export interface DocumentData {
  layerWithID_(id: number | string): any;
}

export interface NSObject {
  objectID(): number;
  setName_(name: string): void;
  name(): string;
  documentData(): DocumentData;
  document: NSAlerter;
}

export interface NSAlerter {
  showMessage(message: string): void;
}

export interface NSText extends INSLayer {
  textAlignment: number;
  stringValue: string;
  textBehaviour: number;
  setIsEditingText(active: boolean): void;
  addAttribute_value_forRange(attribute: string, value: any, range: NSRange): void;
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
  width: number;
  height: number;
}

export interface INSLayer extends NSObject {
  multiplyBy(factor: number): void;
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
