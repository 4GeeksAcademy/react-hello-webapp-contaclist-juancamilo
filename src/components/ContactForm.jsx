import React, { useState } from 'react';
import { addContact } from '../services/apiServices';
import { useContacts } from '../context/contactContext';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        image: ''
    });

    const navigate = useNavigate();
    const { dispatch } = useContacts();

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalContact = {
            ...contact,
            image: contact.image || `https://i.pravatar.cc/150?u=${Date.now()}`
        };

        addContact(finalContact, dispatch, navigate);
    };

    return (
        <div className='form-container'>
            <h2>Agregar Contacto</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <input type="text" name='name' placeholder="Nombre" value={contact.name}
                    onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} />

                <input type="text" name='email' placeholder="Correo electrónico" value={contact.email}
                    onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} />

                <input type="text" name='phone' placeholder="Teléfono" value={contact.phone}
                    onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} />

                <input type="text" name='address' placeholder="Dirección" value={contact.address}
                    onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} />

                <input type="text" name='image' placeholder="URL de Imagen (opcional)" value={contact.image}
                    onChange={(e) => setContact({ ...contact, [e.target.name]: e.target.value })} />

                <button type="submit">Agregar Contacto</button>
            </form>
        </div>
    );
}

export default ContactForm;
