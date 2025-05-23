import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Contact from "../component/Contact.jsx";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

const Contacts = () => {
    const {actions, store} = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
       actions.getContacts()
    }, [])

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-end">
                <button className="btn btn-success" onClick={() => { navigate('/contact-form') }}>Add contact</button>
            </div>
            <div>
            {store.contacts ? store.contacts.map(c => {
                return  <Contact c={c} key={c.id} />
            }) : 'there are no contacts yet'}
    
            </div>
        </div>

    )
    
    


}

export default Contacts