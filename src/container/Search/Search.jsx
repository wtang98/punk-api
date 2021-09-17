import React from 'react'


const Search = (props) => {
    const {handleInput, searchBeer} = props
    return (
        <div>
            <form className="beer-searcher">
                <label htmlFor=""></label>
                <input 
                    className="beer-searcher__box"
                    type="text" 
                    id="search" 
                    placeholder="search beers here" 
                    value={searchBeer} 
                    onInput={handleInput}/>
            </form>
            
        </div>
    )
}

export default Search
