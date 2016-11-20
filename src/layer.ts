import BaseLayer from "./BaseLayer";
import { IFill } from "./fill";

export enum LAYER_TYPE {
  GROUP = 1,
  ARTBOARD = 2,
  PAGE = 3,
  IMAGE = 4,
  LAYER = 5,
  TEXT = 6,
  SHAPE = 7
}

interface Border {}

export default class Layer extends BaseLayer {
  fills: IFill[] = [];
  borders: Border[] = [];
}

export class Group extends BaseLayer {
  type = LAYER_TYPE.GROUP;
}

export class Artboard extends BaseLayer {
  type = LAYER_TYPE.ARTBOARD;
}

export class Page extends BaseLayer {
  type = LAYER_TYPE.PAGE;
}

export class Shape extends BaseLayer {
  type = LAYER_TYPE.SHAPE;
}


