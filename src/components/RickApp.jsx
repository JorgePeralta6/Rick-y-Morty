import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { GridCharacters } from "./GridCharacters";
import Pagination from '@mui/material/Pagination';
import { BuscarCharacters } from "./BuscarCharacters";

export const RickApp = () => {
    const [pagina, setPagina] = useState(1);
    const [buscarPersonaje, setBuscarPersonaje] = useState("");
    const { characters, totalPages } = useCharacters(pagina, buscarPersonaje);

    const handleBuscar = (character) => {
        setBuscarPersonaje(character)
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62823684-0d6e-4108-8d60-aa5003885cb0/ddx53ki-24fbcff9-0c52-4360-9116-567768a5af0e.png/v1/fill/w_800,h_310/rick_and_morty_animated_logo_by_gbenefiel_ddx53ki-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzEwIiwicGF0aCI6IlwvZlwvNjI4MjM2ODQtMGQ2ZS00MTA4LThkNjAtYWE1MDAzODg1Y2IwXC9kZHg1M2tpLTI0ZmJjZmY5LTBjNTItNDM2MC05MTE2LTU2Nzc2OGE1YWYwZS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.j8FfQx7vbW2FxDz9ogelokwjOHwIVP9syJo8--T9G4U" width={325} height={125} alt=""/>
                    <BuscarCharacters handleBuscar={handleBuscar}/>
                </div>
            </nav>

            <div style={{ paddingTop: '150px' }}>
                <GridCharacters characters={characters} />
                <Pagination
                    count={totalPages}
                    page={pagina}
                    onChange={(e, value) => setPagina(value)}
                    color="primary"
                    className="d-flex justify-content-center mt-5"
                />
            </div>
        </>
    );
}
