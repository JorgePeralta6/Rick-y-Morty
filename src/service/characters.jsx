export const reqCharacters = (pagina) => {
    return fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`).then(response => response.json())
        
};
