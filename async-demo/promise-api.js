// const p = Promise.resolve({ id: 1 });
const p = Promise.reject(new Error("reason for rejection..."));
p.catch((error) => console.log(error));
// p.then((result) => console.log(result));

// Use a native error object because it includes the call stack
