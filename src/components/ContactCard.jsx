import React from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../context/contactContext";
import "../styles/index.css";
import { deleteContact } from "../services/apiServices";

export default function ContactCard({ contact }) {
    const { dispatch } = useContacts();

    const handleDelete = () => {
        deleteContact(contact.id, dispatch);
    };

    return (
        <div className="contact-card">
            <img className="contact-avatar"
                 src={contact.image || `https://i.pravatar.cc/150?u=${contact.id}`}
                 alt="profile" />
            <div className="contact-details">
                <h3>{contact.name}</h3>
                <p><i className="fas fa-map-marker-alt" /> {contact.address}</p>
                <p><i className="fas fa-phone" /> {contact.phone}</p>
                <p><i className="fas fa-envelope" /> {contact.email}</p>
            </div>
            <div className="contact-actions">
                <Link to={`/editContact/${contact.id}`}><i className="fas fa-pen" /></Link>
                <button onClick={handleDelete}><i className="fas fa-trash" /></button>
            </div>
        </div>
    );
}
