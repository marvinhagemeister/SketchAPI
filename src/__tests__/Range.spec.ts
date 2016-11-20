import { assert as t } from "chai";
import Range from "../Range";

describe("Range", () => {
  it("should instantiate", () => {
    const range = new Range(1, 3);

    t.deepEqual(range, {
      location: 1,
      length: 2
    });
  });
});
