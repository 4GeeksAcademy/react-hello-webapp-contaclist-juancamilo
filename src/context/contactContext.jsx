import { createContext, useContext, useReducer } from "react";

const initialState = {
    contacts: [],
};

function contactReducer(state, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {...state, contacts: [...state.contacts, action.payload]};

        case 'REMOVE_CONTACT':
            return {...state, contacts: state.contacts.filter(c => c.id !== action.payload)};

        case 'SET_CONTACTS':
            return {...state, contacts: action.payload};    
            
        default:
            return state;
    }
}

const ContactContext = createContext();

export function ContactProvider({children }) {
    const [state, dispatch] = useReducer(contactReducer, initialState);
    return (
        <ContactContext.Provider value={{ state, dispatch}}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactContext);
}
