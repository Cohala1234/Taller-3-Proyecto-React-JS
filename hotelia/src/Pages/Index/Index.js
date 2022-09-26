import React from 'react';
import Header from '../../Componentes/Header/header';
import Banner from '../../Componentes/Banner/Banner';
import Descripcion from '../../Componentes/Descripcion/Descripcion';
import Feature from '../../Componentes/Feature/Feature';
import Ubicacion from '../../Componentes/Ubicación/Ubicacion';
import Opinion from '../../Componentes/Opiniones/Opinion';
import Footer from '../../Componentes/Footer/Footer';

function Index() {
    return(
<div className='container'>
    <Header/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicacion/>
    <Opinion/>
    <Footer/>
</div> 
    );
}

export default Index;