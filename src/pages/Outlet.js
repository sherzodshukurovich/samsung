import React from 'react';
import NavbarJs from "../components/NavbarJs";
import ProyectBody from "../components/ProyectBody";
import FooterEnd from "../components/FooterEnd";

function Outlet(props) {
    return (
        <div>
            <NavbarJs/>
            <ProyectBody/>
            <FooterEnd/>
        </div>
    );
}

export default Outlet;