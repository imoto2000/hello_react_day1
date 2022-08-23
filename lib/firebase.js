import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const REGION_TOKYO = "asia-northeast1";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

console.log("L>>>>>>> ", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
console.log("L>>>>>>> ", config);

const apps = getApps();
if (!apps.length) {
  console.log(">>>>>>>> called firebase initializeApp");
  const app = initializeApp(config);
} else {
  const app = apps[0];
}

const db = getFirestore();
const auth = getAuth();

export { db, auth };
