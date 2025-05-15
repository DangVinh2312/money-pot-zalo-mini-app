export function parseUrlPath(path: string, keys: Record<string, string>) {
  const regex = /:(\w+)/g;
  const newPath = path.replace(regex, (_, key) => {
    if (keys[key]) {
      return keys[key];
    }
    return `:${key}`;
  });
  return newPath;
}
