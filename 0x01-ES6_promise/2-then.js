export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise
        .then((response) => {
          resolve({ status: 200, body: 'success' });
        })
      // eslint-disable-next-line no-unused-vars
        .catch((error) => reject(error))
        .finally(() => console.log('Got a response from the API'));
    });
  });
}
