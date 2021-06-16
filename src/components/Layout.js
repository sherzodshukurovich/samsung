import React from 'react';
import NavbarJs from "./NavbarJs";

function Layout(props) {
    return (
        <div>
            <NavbarJs/>

            <main className='py-5 bg-light'>{props.children}</main>
        </div>
    );
}

export default Layout;