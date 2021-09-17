import React from 'react'

const Results = (props) => {
    const {results} = props;

    return results.map(({image_url, name}) => {
        
        return (
            <div>
            <h2>{name}</h2>
            <img src={image_url} alt={image_url}/>
        </div>
        )
    })
}

export default Results
