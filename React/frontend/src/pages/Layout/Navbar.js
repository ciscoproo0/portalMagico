import React from 'react'; 
import './Navbar.css';

export function Nav(){
    return(
        <div>
            <div class="header">
            <h2>Cisco Samples</h2>
            </div>

            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}