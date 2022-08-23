import firebase, { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
const REGION_TOKYO = "asia-northeast1";

const config = {
  apiKey: "AIzaSyC2bFAEyqLruMua7bYEDjdIpdEzHc1U5tI",
  authDomain: "hello-next-2e684.firebaseapp.com",
  projectId: "hello-next-2e684",
};

initializeApp(config);

export const auth = getAuth();
