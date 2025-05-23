import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Contact = ({ c }) => {
    const navigate = useNavigate()
    const { actions, store } = useContext(Context)

    const handleDelete = () => {
        actions.deleteContact({ id: c.id })

    }

    const handleUpdate = () => {
        actions.handleContactEdit(c)
        navigate('/contact-form')

    }
    return <div>
        <div className="card my-2" key={c.id}>
            <div className="card-body d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                    <img src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" alt="Profile Picture" className="rounded-circle" style={{ "width": "100px", "height": "100px", "objectFit": "cover" }} />
                </div>

                <div className="flex-grow-1">
                    <h5 className="card-title mb-1">{c.name}</h5>
                    <p className="card-text mb-1 text-muted d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill me-2"></i> {c.address}
                    </p>
                    <p className="card-text mb-1 text-muted d-flex align-items-center">
                        <i className="bi bi-telephone-fill me-2"></i> {c.phone}
                    </p>
                    <p className="card-text text-muted d-flex align-items-center">
                        <i className="bi bi-envelope-fill me-2"></i> {c.email}
                    </p>
                </div>

                <div className="flex-shrink-0 ms-auto d-flex align-items-center">
                    <div className="btn btn-sm btn-light p-2 me-2" aria-label="Edit Contact">
                        <button onClick={handleUpdate}> ✏️</button>
                    </div>
                    <div className="btn btn-sm btn-light p-2" aria-label="Delete Contact">
                        <button onClick={handleDelete}> 🗑️</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Contact