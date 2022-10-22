import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class.js";


function ContactComponent( { contact } ){
    return(
        <>
            <h2>Nombre: { contact.name }</h2>
            <h2>Apellido: { contact.lastName }</h2>
            <h2>Email: { contact.email }</h2>
            <h2>Conectado: { contact.state ? "Contacto En Línea" : "Contacto No Disponible" }</h2>
        </> 
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
}

export default ContactComponent;