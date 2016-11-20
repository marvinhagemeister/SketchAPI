import BaseLayer from './baseLayer';
import { LAYER_TYPE } from './layer';
import { NSText } from "./ns";

export enum TEXT_ALIGNMENT {
  LEFT = 1,
  CENTER = 2,
  RIGHT = 3,
  JUSTIFY = 4
}

export default class Text extends BaseLayer {
  type = LAYER_TYPE.TEXT;
  object: NSText;

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
}
