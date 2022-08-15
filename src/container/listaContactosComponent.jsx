import React from 'react';
import Contacto from '../models/contacto.class';
import ContactoComponent from '../pure/contactoComponent';

const ListaContactosComponent = () => {

    const defaultContacto = new Contacto('Jeasson', 'Suárez', 'Example@gmail.com', false);

    return (
        <div>
            <ContactoComponent contacto = { defaultContacto }/>
        </div>
    );
};

export default ListaContactosComponent;
