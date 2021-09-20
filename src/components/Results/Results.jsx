import React from 'react'
import "./Results.scss"

const Results = (props) => {
    const {image_url, name, abv, description, ph, first_brewed, tagline} = props.beer
        return (
            <div className= "api">
                <div className = "api__name">
                    <h3>{name}</h3>
                    <p>{first_brewed}</p>
                    <p>{tagline}</p>
                    <p className = "api__name-desc">{description}</p>
                </div>
                <div className = "api__img">
                    <img className = "api__img-i" src={image_url} alt={image_url}/>
                    <p>{ph} ph</p>
                    <p>abv: {abv}%</p>
                </div>
            </div>
        )

}

export default Results
