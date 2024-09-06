import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { GridCharacters } from "./GridCharacters";
import Pagination from '@mui/material/Pagination';

export const RickApp = () => {
    const [pagina, setPagina] = useState(1);
    const { characters, totalPages } = useCharacters(pagina);

    return (
        <>
            <GridCharacters characters={characters} />
            <Pagination
                count={totalPages}
                page={pagina}
                onChange={(e, value) => setPagina(value)}
                color="primary"
                className="d-flex justify-content-center mt-5"
            />
        </>
    );
}
