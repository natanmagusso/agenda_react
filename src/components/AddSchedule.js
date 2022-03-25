import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/config.js";

export default function AddSchedules() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellPhone, setCellPhone] = useState('');

    const AddSchedule = () => {
        api.post('/Insert', { 
            name, 
            email, 
            cellPhone 
        }).then(() => {
            navigate("/list")
        })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <b>Adicionar contatos</b>
                </div>
                <div className="card-body">
                    <form onSubmit={AddSchedule}> 
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cellphone">Celular</label>
                            <input type="text" className="form-control" name="cellPhone" id="cellPhone" onChange={(e) => setCellPhone(e.target.value)} />
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