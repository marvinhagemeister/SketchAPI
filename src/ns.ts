export interface DocumentData {
  layerWithID_(id: number | string): any;
}

export interface NSObject {
  objectID(): number;
  setName_(name: string);
  name(): string;
  documentData(): DocumentData;
  document: {
    showMessage(message: string);
  }
}

export interface NSText extends NSObject {
  textAlignment: number;
  stringValue: string;
  textBehaviour: number;
}

export interface NSLayer {
  style: {
    fills(): any[];
  }
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