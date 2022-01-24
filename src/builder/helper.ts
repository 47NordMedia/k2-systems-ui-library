// export function camelize(str: string): string {
//   return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
//     if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
//     return index === 0 ? match.toLowerCase() : match.toUpperCase();
//   });
// }

export function camelize(str: string): string {
  return str.replace(/-([a-z])/g, (g) => {
    return g[1].toUpperCase();
  });
}

export function dashize(str: string): string {
  return str.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
}
