import { deepFreeze } from "../domain/utils/object";

export default abstract class ValueObject<T = any> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = deepFreeze(value);
  }

  get value(): T {
    return this._value;
  }

  toString = () => {
    if (typeof this._value !== "object" || this._value === null) {
      try {
        return this._value.toString();
      } catch (error) {
        return this._value + "";
      }
    }

    return JSON.stringify(this._value);
  };
}
