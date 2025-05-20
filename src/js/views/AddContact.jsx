import React, { useActionState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addr, setAddr] = useState('')
    const {actions, store} = useContext(Context)

    const sendData = () => {
        actions.sendData({name: fullName, email : email, phone: phone, address: addr})
        navigate('/')
    }



    const handleChange = (e) => {
        if (e.target.name === 'fullName') {
            setFullName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        } else if (e.target.name === 'addr') {
            setAddr(e.target.value)
        }

    }
    return <div className="container-fluid">
        <form className="row g-3">
            <div className="col-md-12">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input onChange={handleChange} value={fullName} type="text" className="form-control" name="fullName" placeholder="Enter full name"/>
            </div>
            <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input onChange={handleChange} value={email} type="email" className="form-control" name="email" placeholder="Enter email"/>
            </div>
            <div className="col-12">
                <label htmlFor="phone" className="form-label">Phone </label>
                <input onChange={handleChange} value={phone} type="number" className="form-control" name="phone" placeholder="xxx-xxx-xxx"/>
            </div>
            <div className="col-12">
                <label htmlFor="addr" className="form-label">Address</label>
                <input onChange={handleChange} value={addr} type="text" className="form-control" name="addr" placeholder="1234 Main St"/>
            </div>
            
            <div className="col-12">
                <button onClick={sendData} type="button" className="btn btn-primary">Save</button>
            </div>
            <div>
                <Link to ='/'>Go back</Link>
            </div>
        </form>
    </div>
}

export default AddContact