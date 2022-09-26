import React from 'react';
import Nav from '../../components/nav/Nav.js';
import Slider from '../../components/slider/Slider.js';
import Feature from '../../components/feature/Feature.js';
import SectionUbicanos from '../../components/sectionUbicanos/SectionUbicanos.js';
import Opiniones from '../../components/opiniones/Opiniones.js';
import Footer from '../../components/footer/Footer.js';
import "./Inicio.css";
function Inicio()
{
    return(
        <div className="container">
            <Nav/>
            <Slider/>
            <Feature/>
            <SectionUbicanos/>
            <Opiniones/>
            <Footer/>
        </div>
    );
}
export default Inicio;