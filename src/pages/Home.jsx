import ContactCard from "../components/ContactCard.jsx";
import { useContacts } from "../context/contactContext.jsx";
import { Link } from "react-router-dom";


function Home () {
  const {state, dispatch} =useContacts();



  const handleRemove = (id) => {
	dispatch({ type: 'REMOVE_CONTACT', payload: id });
  };


	return (
		<div className="contact-list">
			<h1>Lista de Contactos</h1>
			<ul>
				{state?.contacts?.map((c) => (
					<ContactCard contact={c} key={c.id}/>
				))}
			</ul>
		</div>
	);
}; 

export default Home;
