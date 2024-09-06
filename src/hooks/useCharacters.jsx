import { useEffect, useState } from "react";
import { reqCharacters } from "../service/characters";

export const useCharacters = (pagina) => {
    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        reqCharacters(pagina).then((data) => {
            setCharacters(data.results);
            setTotalPages(data.info.pages); 
        });
    }, [pagina]);

    return {
        characters,
        totalPages
    };
};
