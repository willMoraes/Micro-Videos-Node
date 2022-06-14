import { deepFreeze } from "./object";

describe("Object Unit Tests", () => {
  it("it should be a immutable object", () => {
    const obj = deepFreeze({
      prop1: "value1",
      deep: {
        prop2: "value2",
        prop3: new Date(),
      },
    });

    expect(() => {
      (obj as any).prop1 = "newValue";
    }).toThrowError(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );

    expect(() => {
      (obj as any).deep.prop2 = "newValue";
    }).toThrowError(
      "Cannot assign to read only property 'prop2' of object '#<Object>'"
    );

    expect(obj.deep.prop3).toBeInstanceOf(Date);
  });
});
