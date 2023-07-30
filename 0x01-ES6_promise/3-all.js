// eslint-disable-next-line no-unused-vars, import/no-unresolved, import/extensions
import { createUser, uploadPhoto } from '../0x01b_promise/utils.js';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then((results) => {
    const [userResult, photoResult] = results;
    console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    // eslint-disable-next-line no-unused-vars
  }).catch((error) => {
    console.log('Signup system offline');
  });
}
