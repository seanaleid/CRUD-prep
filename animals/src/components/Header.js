import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (
        <div>
            <h1>Hello from the Header.js!</h1>
            <ul>
                <li>
                    <Link to ="/login">Login</Link>
                </li>
                <li>
                    <Link to ="/creatures">Animals</Link>
                </li>
                <li>
                    <Link to ="/login" onClick={signOut}>Sign out</Link>
                </li>
            </ul>
        </div>
    )
}