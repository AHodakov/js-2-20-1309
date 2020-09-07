// export let get = (url) => {
//   return fetch(url).then((d) => d.json());
// };

export function get(url) {
    return fetch(url).then((d) => d.json());
  }
