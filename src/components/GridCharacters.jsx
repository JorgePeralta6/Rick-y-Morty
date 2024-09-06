export const GridCharacters = ({characters}) => {
    return(
        <>
            <div className='d-flex flex-row row row-cols-6'>
            {
                characters &&
                characters.map((char) => (
                        <div key={char.id}>
                            <h5 className='text-center'>{char.name}, {char.species}</h5>
                            <img style={{width: '200px'}} src={char.image} alt='' />
                        </div>
                    ))
            }
        </div>
        </>
    )

}
