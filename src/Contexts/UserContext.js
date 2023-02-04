import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import firebaseApp from '../Firebase/Firebase.config';

const auth =getAuth(firebaseApp)

export const AuthContext = createContext();

const UserContext = ({children}) => {
    
    const [user,setUser]=useState({});

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateuserProfile =(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:'https://www.facebook.com/photo/?fbid=3270017463228418&set=a.1388699101360273'
        })
        .then(()=>{
            console.log("Profile is Updated");
        })
        .catch(erorr=>console.error(erorr))
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{

        return signOut(auth)
        .then(()=>{
            console.log("signOut Successfully");
        })
        .catch(error=>console.error(error));

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("Auth State change current user is :",currentUser);
        })
        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo ={user,createUser,updateuserProfile,signIn,logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;