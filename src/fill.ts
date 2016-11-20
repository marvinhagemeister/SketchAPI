import { IColor } from "./parse";

export interface IFill {
  enabled: boolean;
  type: number;
  data: IColor;
}

export enum FILL_TYPE {
  color = 1,
  gradient = 2
}

export default class Fill implements IFill {
  private _enabled: boolean = false;
  public type: number;
  public data: IColor;

  set enabled(isEnabled: boolean) {
    this._enabled = isEnabled;
  }

  get enabled() {
    return this._enabled;
  }
}