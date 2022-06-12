export default class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || "Invalid UUID");
    this.name = "InvalidUuidError";
  }
}
