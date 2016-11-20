import BaseLayer from './BaseLayer';
import Range from "./Range";
import { LAYER_TYPE } from './layer';
import { NSText, NSRange } from "./ns";

export enum TEXT_ALIGN {
  LEFT = 1,
  CENTER = 2,
  RIGHT = 3,
  JUSTIFY = 4
}

enum ATTRIBUTES {
  FOREGROUND_COLOR = 1,
}

const mappings = {
  "1": "NSColor"
};

export default class Text extends BaseLayer {
  type = LAYER_TYPE.TEXT;
  object: NSText;
  private _editmode: boolean = false;

  get text() {
    return this.object.stringValue;
  }

  set text(text: string) {
    this.object.stringValue = text;
  }

  set align(mode: number) {
    this.object.textAlignment = mode;
  }

  set fixedWidth(isFixed: boolean) {
    this.object.textBehaviour = isFixed ? 0 : 1;
  }

  get editmode() {
    return this._editmode;
  }

  set editmode(active) {
    this.object.setIsEditingText(active);
    this._editmode = active;
  }

  addAttribute(attribute: number, value: any, range?: NSRange) {
    const attr = mappings[attribute];
    if (typeof attr === "undefined") {
      throw new Error("Unknown attribute: " + attribute);
    }

    if (typeof range === "undefined") {
      range = new Range(0, this.text.length);
    }

    this.object.addAttribute_value_forRange(attr, value, range);
  }
}
