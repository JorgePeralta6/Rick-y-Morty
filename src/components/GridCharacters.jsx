export const GridCharacters = ({characters}) => {
    return(
        <>
            <div className="d-flex flex-row row row-cols-1 row-cols-md-3 row-cols-lg-6 mt-5">
                {characters &&
                    characters.map((char) => (
                        <div className="col mb-4" key={char.id}>
                            <div className="card h-100 text-center">
                                <img className="card-img-top" style={{ width: '100%', height: 'auto' }} src={char.image} alt={char.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{char.name}, {char.species}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
