export const getContacts = async (dispatch) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/juanca/contacts');

    if (!response.ok) {
        await createAgenda(dispatch);
        return;
    }

    const data = await response.json();
    dispatch({ type: 'SET_CONTACTS', payload: data.contacts });
};

export const createAgenda = async (dispatch) => {
    await fetch('https://playground.4geeks.com/contact/agendas/robertaval', { method: 'POST' });
    getContacts(dispatch);
};

export const addContact = async (contact, dispatch, navigate) => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/juanca/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            address: contact.address,
            image: contact.image || `https://i.pravatar.cc/150?u=${Date.now()}`, 
            agenda_slug: "juanca"
        })
    });

    if (response.ok) {
        await getContacts(dispatch);
        navigate('/');
    } else {
        console.error("Failed to add contact");
    }
};

export const deleteContact = async (id, dispatch) => {
    await fetch(`https://playground.4geeks.com/contact/agendas/juanca/contacts/${id}`, {
        method: 'DELETE',
    });

    await getContacts(dispatch);
};

export const updateContact = async (id, formData, dispatch, navigate) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/juanca/contacts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                image: formData.image || `https://i.pravatar.cc/150?u=${id}`, 
                agenda_slug: "juanca"
            })
        });

        if (response.ok) {
            await getContacts(dispatch);
            navigate('/');
        } else {
            console.error("Failed to update contact");
        }
    } catch (error) {
        console.log("Error updating contact:", error);
    }
};
