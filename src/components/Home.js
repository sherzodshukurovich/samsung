import React from 'react';
import {NavLink} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/post'>Post</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Home;