export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise
        .then((resolve) => {
          resolve({ status: 200, body: 'success' });
        })
      // eslint-disable-next-line no-unused-vars
        .catch((error) => new Error())
        .finally(() => console.log('Got a response from the API'));
    });
  });
}
