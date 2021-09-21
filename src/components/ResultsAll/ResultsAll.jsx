import React from "react";
import Results from "../Results/Results"
import "./ResultsAll.scss"



const ResultsAll = (props) => {
    const{results}=props

    const beersList = results.map((beer) => {
        return <Results beer={beer}/>
    })
    return (
        <div className="fullResult">
                {beersList}
        </div>
    )
}

export default ResultsAll
