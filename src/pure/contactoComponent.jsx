import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Contacto from '../models/contacto.class';


const ContactoComponent = ({ contacto }) => {

    const [estado, setEstado] = useState(false);

    const cambiarEstado = () => {

        if (estado) {
            setEstado(false);
            contacto.conectado = false;
        }else{
            setEstado(true);
            contacto.conectado = true;
        }
    }

    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h2>Apellido: { contacto.apellido }</h2>
            <h3>Email: { contacto.email }</h3>
            <h3>Estado: { estado ? 'Contacto En Linea' : 'Contacto No Disponible' }</h3>
            <button onClick={ cambiarEstado }>Cambiar estado de contacto</button>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
