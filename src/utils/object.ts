export function isObject<T extends object>(value: T) {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}
