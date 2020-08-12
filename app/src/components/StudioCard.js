import React from 'react'


const StudioCard = (props) => {
    const { movieData } = props


    return (
        <div>
            <p>{movieData.director}</p>
            <p>{movieData.release_date}</p>
            <p>{movieData.description}</p>
        </div>
    )

}

export default StudioCard