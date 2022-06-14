import { v4 as uuid, validate as uuidValidate } from "uuid";
import InvalidUuidError from "../../errors/invalid.uuid.error";
import ValueObject from "./value-object";

export default class UniqueEntityId extends ValueObject<string> {
  constructor(public readonly id?: string) {
    super(id || uuid());
    this.validate();
  }

  public validate() {
    const isValidUuid = uuidValidate(this.value);

    if (!isValidUuid) {
      throw new InvalidUuidError();
    }

    return this;
  }
}
