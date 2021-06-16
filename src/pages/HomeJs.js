import React from 'react';
import NavbarJs from "../components/NavbarJs";
import Imageheader from "../components/Imageheader";
import CaruselPopular from "../components/CaruselPopular";
import HomeC from "../components/HomeC";
import CaruselKros from "../components/CaruselKros";
import ProyectBody from "../components/ProyectBody";
import PRoyectSectionFooter from "../components/PRoyectSectionFooter";
import FooterEnd from "../components/FooterEnd";
import FooterP from "../components/FooterP";
function HomeJs(props) {
    return (
        <div>
            <Imageheader/>
            <CaruselPopular/>
            <HomeC/>
            <CaruselKros/>
            <ProyectBody/>
            <FooterP/>
            <PRoyectSectionFooter/>
            <FooterEnd/>
        </div>
    );
}

export default HomeJs;