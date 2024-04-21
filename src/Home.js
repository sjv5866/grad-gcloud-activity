import React, { useState, useEffect } from 'react';
// import {  onAuthStateChanged, signOut } from "firebase/auth";
// import {auth, db, loggedIn, firebaseObserver} from './firebase';
import { useNavigate } from 'react-router-dom';
import Table from './Table'
 
const Home = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
  
    // TODO: Implement the useEffect hook from Part Two
 
    const handleLogout = () => {    
        // TODO: Implement the handleLogout function from Part Two
    }
   
    if (loggedIn) {
        return(
            <>
                <nav>
                <p>Welcome {user}! You are now signed-in!</p>
                <Table />
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