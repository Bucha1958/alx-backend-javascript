// eslint-disable-next-line no-unused-vars, import/no-unresolved, import/extensions
import { createUser, uploadPhoto } from '../0x01b_promise/utils.js';

export default async function handleProfileSignup() {
  try {
    const createUserProfile = await createUser();
    const uploadPhotoProfile = await uploadPhoto();
    console.log(`${uploadPhotoProfile.body} ${createUserProfile.firstName} ${createUserProfile.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
