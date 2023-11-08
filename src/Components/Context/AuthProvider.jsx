import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const axiosSecure = useAxiosSecure();
    const [user, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUsers(currentUser);
            setLoading(false);
            if (currentUser) {
                // checkAdminStatus(userEmail);
                axiosSecure.post('/jwt', loggedUser)
                    .then(res => console.log(res.data))

            }
            else {
                axiosSecure.post('/logoutUser', loggedUser)
                    .then(res => console.log(res.data))
            }
        });
        return () => unSubscribe();
    }, [auth, axiosSecure, user?.email]);


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const SignInWithGit = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };


    const authInfo = {
        user,
        createUserWithEmail,
        signInWithEmail,
        signOutUser,
        signInWithGoogle,
        updateUser,
        loading,
        SignInWithGit,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;