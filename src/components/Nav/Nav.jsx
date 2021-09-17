import Search from "../../container/Search/Search"
import "./Nav.scss"
import React, {useState} from 'react'

const Nav = () => {
    const [searchBeer, setsearchBeer] = useState("")
    const [beer, setbeer] = useState({})

    const handleInput = (e)=> {
        e.preventDefault();
        beerResults(searchBeer)
    }

    const beerResults = (beer) => {
        fetch(`https://api.punkapi.com/v2/${beer}`)
            .then((response) => response.json)
            .then((beerData) => setsearchBeer(beerData))
            .catch((err) => console.log(err))
    }

    return (
        <nav className="nav">
            <Search handleInput={handleInput} searchBeer={searchBeer}/>
        </nav>
        
    )
}

export default Nav
