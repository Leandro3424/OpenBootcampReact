import React from "react";
import { Contacto } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

function ContactShowComponent(){

    const defaultContact = new Contacto("Edwin", "Moreno", "edwin@gmail.com", false);

    return(
        <>
            <ContactComponent contact={defaultContact} />
        </>
    )
}

export default ContactShowComponent;