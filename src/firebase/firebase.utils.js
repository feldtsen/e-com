import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC4cK6pXPdm2wUR7-_jUFvSc64jFDJZZQI",
    authDomain: "e-com-46cb6.firebaseapp.com",
    projectId: "e-com-46cb6",
    storageBucket: "e-com-46cb6.appspot.com",
    messagingSenderId: "130381255671",
    appId: "1:130381255671:web:509b53088cafd5df4b94f2",
    measurementId: "G-MLZ2FCDDHS"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export const signOut = () => auth.signOut();

export default firebase;