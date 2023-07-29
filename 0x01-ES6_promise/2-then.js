/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise
        .then((response) => {
          resolve({ status: 200, body: 'success' });
        })
      // eslint-disable-next-line no-unused-vars
        .catch((error) => reject(new Error()))
        .finally(() => console.log('Got a response from the API'));
    }, 1000);
  });
}
