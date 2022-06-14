import ValueObject from "../value-object";

const mockObject = {
  prop: "value",
};

class StubValueObject extends ValueObject {
  constructor(value: any) {
    super(value);
  }
}

describe("ValueObject Unit Tests", () => {
  it("should create an instance", () => {
    let ValueObject = new StubValueObject("Test Value");

    expect(ValueObject.value).toBe("Test Value");

    ValueObject = new StubValueObject(mockObject);

    expect(ValueObject.value).toStrictEqual(mockObject);
  });

  it("should convert to string", () => {
    const date = new Date();

    const arrange = [
      { value: "Test Value", expected: "Test Value" },
      { value: mockObject, expected: JSON.stringify(mockObject) },
      { value: 1, expected: "1" },
      { value: true, expected: "true" },
      { value: date, expected: JSON.stringify(date) },
    ];

    arrange.forEach((arrange) => {
      const ValueObject = new StubValueObject(arrange.value);

      expect(ValueObject + "").toBe(arrange.expected);
    });
  });
});
