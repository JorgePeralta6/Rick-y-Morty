import { useState } from "react";

export const BuscarCharacters = ({ handleBuscar }) => {
    const [buscarPersonaje, setBuscarPersonaje] = useState("");

    const handleEncontrar = (e) => {
        e.preventDefault();
        handleBuscar(buscarPersonaje);
    }

    return (
        <>
            
            <form class="d-flex" role="search" onSubmit={handleEncontrar}>
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => setBuscarPersonaje(e.target.value)}/>
                <button class="btn btn-primary" type="submit">Buscar</button>
            </form>
            
        </>
    );
}