export function assertNotNull<T>(
  target: T | undefined | null,
  message?: string,
): asserts target is T {
  if (target == null) {
    throw new Error(message ?? `target is null or undefined: ${target}`);
  }
}

export function assertNotEmpty<T extends string | E[], E>(
  target: T | undefined | null,
  message?: string,
): asserts target is T {
  assertNotNull(target);
  if (target.length === 0) {
    throw new Error(message ?? `target is empty ${typeof target}.`);
  }
}
