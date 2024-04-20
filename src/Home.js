import React, { useState, useEffect } from 'react';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import {auth, loggedIn, firebaseObserver} from './firebase';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
  
    // useEffect(() => {
    //     onAuthStateChanged(auth, (usr) => {
    //         if (usr) {
    //           setLoggedIn(true);
    //           setUser(usr["email"]);
    //         } else {
    //           setLoggedIn(false);
    //           setUser(null);
    //         }
    //       });
    // }, [user, loggedIn]);
 
    const handleLogout = () => {               
        // signOut(auth).then(() => {
        // // Sign-out successful.
        //     navigate("/");
        //     console.log("Signed out successfully")
        // }).catch((error) => {
        // // An error happened.
        // });
    }
   
    if (loggedIn) {
        return(
            <>
                <nav>
                <p>Welcome {user}! You are now signed-in!</p>
    
                    <div>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </nav>
            </>
        )
    }
    else {
        return(
            <>
                <div>
                    <button onClick={(e) => {navigate("/login")}}>
                    Login
                    </button>
                </div>
                <div>
                    <button onClick={(e) => {navigate("/signup")}}>
                    Sign Up
                    </button>
                </div>
            </>
        )
    }
}
 
export default Home;