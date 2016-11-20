declare module "sketch-api" {
  interface EnumSelection {
    0: number;
    1: Selection;
  }

  interface Properties {
    [name: string]: any;
  }

  interface ContextSelection {
    [position: number]: Layer;
    count(): number;
  }

  interface Context {
    api: any;
    command: any;
    document: Document;
    scriptPath: string;
    scriptURL: string;
    selection: ContextSelection;
  }

  export class Application extends WrappedObject {
    constructor(context: Context);
    readonly api_version: string;
    readonly context: Context;
    readonly version: string;
    readonly build: string;
    readonly full_version: string;
    settingForKey(key: any): any;
    resurceNamed(name: string): string;
    getStringFromUser(msg: string, initial: string): string;
    getSelectionFromUser(msg: string, items: any[], selectedItemIndex: number): EnumSelection;
    log(message: string);
    assert(condition: boolean);
    readonly selectedDocument: Document;
    newDocument(): Document;
    message(message: string);
    alert(title: string, message: string);
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
  }

  export class Artboard extends Layer {
    constructor(artboard: any, document: Document);
    readonly isArtboard: boolean;
  }

  export class Document extends WrappedObject {
    constructor(document: any, application: Application);
    readonly selectedLayers: Selection;
    readonly selectedPage: Page;
    readonly pages: Page[];
    layerWithID(id: number): Layer;
    layerNamed(id: number): Layer | undefined;
  }

  export class Group extends Layer {
    constructor(group: any, document: Document);
    is_group(): boolean;
  }

  export class Image extends Layer {
    constructor(page: any, document: Document);
    readonly isImage: boolean;
    imageURL(url: string);
  }

  export class Layer extends WrappedObject {
    constructor(layer: any, document: Document);
    name: string;
    frame: string;
    duplicate(): Layer;
    readonly isPage: boolean;
    readonly isArtboard: boolean;
    readonly isGroup: boolean;
    readonly isText: boolean;
    readonly isShape: boolean;
    readonly isImage: boolean;
    addWrappedLayerWithProperties(newLayer: any, properties: Properties, wrapper: any): Layer | undefined;
    frameForLayerWithProperties(properties: Properties): Rectangle;
    newShape(properties: Properties): Shape;
    newText(properties: Properties): Text;
    newGroup(properties: Properties): Group;
    newArtboard(properties: Properties): Artboard;
    newImage(properties: Properties): Image;
    remove();
    select();
    deselect();
    addToSelection();
    iterate(block: any);
  }

  export class Page extends Layer {
    constructor(page: any, document: Document);
    readonly isPage: boolean;
  }

  export class Rectangle {
    constructor(x: number, y: number, width: number, height: number);
    asCGRect(): any;
  }

  export class Selection extends WrappedObject {
    constructor(document: Document);
    readonly isEmpty: boolean;
    iterateAndClear(block: any);
    iterate(block: any);
    clear();
    _iterateWithLayers(layers: Layer[], block: any); 
  }

  export class Shape extends Layer {
    constructor(shape: any, document: Document);
    readonly isShape: boolean;
  }

  export class Text extends Layer {
    constructor(text: any, document: Document);
    readonly isText: true;
    text: string;
    font: string;
    systemFont(size: number);
    alignment(mode: any);
    setFixedWith(value: any);
  }

  export class WrappedObject {
    constructor(object: any);
    id: string;
  }
}