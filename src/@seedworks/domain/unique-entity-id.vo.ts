import { v4 as uuid, validate as uuidValidate } from "uuid";
import InvalidUuidError from "../errors/invalid.uuid.error";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuid();
    this.validate();
  }

  public validate() {
    const isValidUuid = uuidValidate(this.id);

    if (!isValidUuid) {
      throw new InvalidUuidError();
    }

    return this;
  }
}
