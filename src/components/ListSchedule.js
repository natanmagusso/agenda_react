import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { api } from "../services/config.js";

export default function ListSchedules() {
    const [getSchedules, setGetSchedules] = useState([]);
    useEffect(() => {
        api.get('/GetAll')
            .then((response) => {
                console.log(response.data)
                setGetSchedules(response.data);
            })
    }, []);

    const setFields = (id, name, email, cellPhone) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('cellPhone', cellPhone)
    }

    const refreshSchdules = () => {
        api.get('/GetAll')
            .then((response) => { 
                setGetSchedules(response.data);
            })
    }

    const deleteSchedule = (id) => {
        api.delete(`/Delete/${id}`)
            .then(() => {
                refreshSchdules();
            })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <b>Agenda de contatos</b>
                </div>
                <div className="card-body">
                    <Link className="btn btn-primary" to={"/add"}>Adicionar</Link>

                    <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                            { getSchedules.map((schedule) => (
                                <tr key={schedule.id}>
                                    <td>{schedule.name}</td>
                                    <td>{schedule.email}</td>
                                    <td>{schedule.cellPhone}</td>
                                    <td>
                                        <div className="btn-group" role="group" aria-label="">
                                            <Link className="btn btn-primary" to={"/edit"} onClick={() => setFields(schedule.id, schedule.name, schedule.email, schedule.cellPhone)}>Editar</Link>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteSchedule(schedule.id)}>Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            ))} 
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
    );
}