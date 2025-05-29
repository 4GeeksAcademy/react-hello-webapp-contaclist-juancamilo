import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useContacts } from '../context/contactContext';
import { updateContact } from "../services/apiServices";

function EditContact() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state, dispatch } = useContacts();

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        image: ''
    });

    useEffect(() => {
        const current = state.contacts.find(c => c.id === Number(id));
        if (current) setContact(current);
    }, [id, state.contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updated = {
            ...contact,
            image: contact.image || `https://i.pravatar.cc/150?u=${id}`
        };

        updateContact(id, updated, dispatch, navigate);
    };

    return (
        <div className='form-container'>
            <h2>Editar Contacto</h2>
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

                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default EditContact;
