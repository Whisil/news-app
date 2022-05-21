import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from './slices/loginSlice';
import { RootState } from './app/store';
import { useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBD5K-oHvWe_Nj7YWRMG7tEKUBeo3Tbdjk",
    authDomain: "news-app-4e762.firebaseapp.com",
    projectId: "news-app-4e762",
    storageBucket: "news-app-4e762.appspot.com",
    messagingSenderId: "567471560882",
    appId: "1:567471560882:web:7f24a743da75a4f4de51ab"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email:string, password:string){
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email:string, password:string){
    return signInWithEmailAndPassword(auth, email, password);
}


export function useAuth(){
    const currentUser = useSelector((state: RootState) => state.login.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => dispatch(setCurrentUser(user?.email)));

        return unsub;
    }, [])

    return currentUser;
}