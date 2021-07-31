export function capitalize(value) {
  if (!value) {
    return value;
  }

  if (value.length === 1) {
    return value.toUpperCase();
  }

  return value[0].toUpperCase() + value.substring(1).toLowerCase();
}