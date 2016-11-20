import { assert as t } from "chai";
import * as sinon from "sinon";
import BaseLayer, { MOVE_MODE } from "../BaseLayer";
import { NSLayer } from "./stubs";

describe("BaseLayer", () => {
  it("should scale", () => {
    const mock = new NSLayer();
    const frame = mock.frame();
    const layer = new BaseLayer(mock);
    layer.width = 100;
    layer.height = 200;

    t.deepEqual(layer.position, {
      x: 0,
      y: 0
    });

    layer.scale(2);

    t.deepEqual(layer.position, {
      x: 0,
      y: 0
    });

    t.equal(frame.width, 200);
    t.equal(frame.height, 400);
  });

  it("should move relative", () => {
    const mock = new NSLayer();
    const layer = new BaseLayer(mock);

    t.deepEqual(layer.position, {
      x: 0,
      y: 0
    });

    layer.move(10, 10);
    t.deepEqual(layer.position, {
      x: 10,
      y: 10
    });

    layer.move(-20, 0, MOVE_MODE.RELATIVE);
    t.deepEqual(layer.position, {
      x: -10,
      y: 10
    });
  });

  it("should move absolute", () => {
    const mock = new NSLayer();
    const layer = new BaseLayer(mock);

    layer.move(10, 10, MOVE_MODE.ABSOLUTE);
    layer.move(-210, 10, MOVE_MODE.ABSOLUTE);

    t.deepEqual(layer.position, {
      x: -210,
      y: 10
    });
  });

  it("should chain transformations", () => {
    const mock = new NSLayer();
    const layer = new BaseLayer(mock);

    layer
      .move(10, 10)
      .scale(2)
      .move(10, 10);
  });
});
