import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { api } from "../services/config.js";

export default function EditSchedules() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [ID, setID] = useState(null);

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setCellPhone(localStorage.getItem('cellPhone'));
        setID(localStorage.getItem('ID'));
    }, []);

    const EditSchedule = () => {
        api.put(`/Update/${ID}`, { 
            name,
            email,
            cellPhone
        })
    }    

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <b>Editar contato</b>
                </div>
                <div className="card-body">
                    <form onSubmit={EditSchedule}> 
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cellphone">Celular</label>
                            <input type="text" className="form-control" name="cellPhone" id="cellPhone" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)} />
                        </div>
                        <br />
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-secondary" to={"/list"}>Cancelar</Link>                  
                            <button type="submit" className="btn btn-success">Salvar</button>                        
                        </div>
                    </form>  
                </div>
            </div>
        </div>            
     );
}