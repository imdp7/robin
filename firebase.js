import firebase from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyAuS1hm0LY0oT8xRydBr97a2FxgesYnNII",
  authDomain: "robin-413a9.firebaseapp.com",
  projectId: "robin-413a9",
  storageBucket: "robin-413a9.appspot.com",
  messagingSenderId: "487377104972",
  appId: "1:487377104972:web:b01ca1a493f6a39310c4e9",
  measurementId: "G-ESV3X2V9CD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
  
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await db.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
  
};


export { db };