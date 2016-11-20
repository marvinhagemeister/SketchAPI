import { IFill, FILL_TYPE } from "./fill";
import { NSColor, NSFill } from "./ns";

export interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
  hex?: string | undefined;
  hexrgba?: string;
  rgba?: string;
}

export function toHex(red: number, green: number, blue: number, alpha?: number) {

}

export function parseColor(color: NSColor): IColor {
  const c: IColor = {
    r: Math.round(color.red() * 255),
    g: Math.round(color.green() * 255),
    b: Math.round(color.blue() * 255),
    a: color.alpha()
  };

  c.hex = c.a === 1
    ? "#" + toHex(c.r, c.g, c.b)
    : null;

  c.hexrgba = "#" + toHex(c.r, c.g, c.b, c.a);
  c.rgba = "rgba(" + [c.r, c.g, c.b, c.a].join(", ") + ")";
  return c;
}

interface FILL_MAP {
  [key: string]: number;
}

export function parseFills(fills: NSFill[]) {

  // return fills.map(fill => {
  //   const key = fill.fillType();
  //   const data = FILL_TYPE[fill.fillType()] === FILL_TYPE.color
  //     ? parseColor(fill.color())
  //     : null;

  //   return {
  //     type: parseInt(FILL_TYPE[fill.fillType()]),
  //     enabled: fill.isEnabled(),
  //     data
  //   };
  // });
}
