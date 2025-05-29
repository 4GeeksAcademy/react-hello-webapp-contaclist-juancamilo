import React from  "react";
import ContactForm from "./components/ContactForm.jsx";
import { useContacts } from "./context/contactContext.jsx";

function App() {
    const { state, dispatch } = useContacts();

    const handleAddContact = (contact) => {
        dispatch({ type: 'ADD_CONTACT', payload: contact});
    };

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_CONTACT', payload: id});
    };

    console.log("Contactos actuales", state.contacts);

    return(
    <div className="card-header">
        <div className="card">
            <h1>Lista de contacto</h1>
            <ContactForm onAddContact={handleAddContact} />
            <ul>
                {state.contacts.map((c) => (
                    <li key={c.id}>
                        {c.name} - {c.email}
                        <button onClick={() => handleRemove(c.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>        
    </div>
    );
}

export default App;