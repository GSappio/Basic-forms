import React, { useState } from "react";
import './index.css';


export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function salvandoNoStorage() {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        setName("");
        setEmail("");
        alert("Novo úsuario salvo!")
    }

    return(
    <tbody>
            <h1>Cadastre-se</h1>
        <div>
        <p>
            <input className="inputName"
                    type="name"
                    placeholder="   Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
            </input>
        </p>
        <p>
            <input className="inputEmail"
                    type="email"
                    placeholder="   Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
            </input>
        </p>

        <button className="btn" onClick={salvandoNoStorage}>Salvar</button>

    </div>
    </tbody>
    )
}

