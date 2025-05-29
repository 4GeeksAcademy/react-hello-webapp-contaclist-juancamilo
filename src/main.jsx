import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css';  
import { ContactProvider } from './context/contactContext.jsx';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>  
        <ContactProvider>
            <RouterProvider router={router} />
        </ContactProvider>            
    </React.StrictMode>
);

