export default class {
  getTime(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Date.now());
      }, delay || 0);
    })
  }
}