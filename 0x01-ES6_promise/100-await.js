import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    // upload a photo
    photo = await uploadPhoto();
    // create user
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}