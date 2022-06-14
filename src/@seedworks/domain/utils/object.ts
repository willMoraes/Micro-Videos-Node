export function deepFreeze<T>(obj: T) {
  const propNames = Object.getOwnPropertyNames(obj);

  for (const name of propNames) {
    const prop = obj[name as keyof T];

    if (typeof prop === "object" && prop !== null) {
      deepFreeze(prop);
    }
  }

  return Object.freeze(obj);
}
