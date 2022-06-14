import InvalidUuidError from "../../../errors/invalid.uuid.error";
import UniqueEntityId from "../unique-entity-id.vo";

function spyValidateMethod(): jest.SpyInstance {
  return jest.spyOn(UniqueEntityId.prototype, "validate");
}

describe("UniqueEntityId Unit Tests", () => {
  it("should create an instance", () => {
    expect(new UniqueEntityId()).toBeTruthy();
  });

  it("should throw an error if id is not valid", () => {
    const validateSpy = spyValidateMethod();

    expect(() => new UniqueEntityId("invalid")).toThrow(InvalidUuidError);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept and validate a valid id", () => {
    const validateSpy = spyValidateMethod();
    const uuid = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11";
    const uniqueEntityId = new UniqueEntityId(uuid);

    expect(uniqueEntityId.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept an empty id", () => {
    const validateSpy = spyValidateMethod();
    const uniqueEntityId = new UniqueEntityId();

    expect(uniqueEntityId.validate()).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
