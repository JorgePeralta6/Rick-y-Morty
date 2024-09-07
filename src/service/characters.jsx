export const reqCharacters = async (pagina, buscarPersonaje) => {
    let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
    
    if (buscarPersonaje !== null && buscarPersonaje !== "") {
        url = `https://rickandmortyapi.com/api/character?name=${buscarPersonaje}&page=${pagina}`;
    }

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}