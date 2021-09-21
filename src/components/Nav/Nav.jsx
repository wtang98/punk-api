import Search from "../Search/Search"
import "./Nav.scss"
import React from 'react'
import FiltersList from "../../containers/Filterslist/FiltersList"

const Nav = (props) => {
    const {handleInput, searchTerm, checkBoxABV, checkBoxRange, checkBoxPh} = props
    return (
        <>
        <div className="nav">
            <h1>Find Your Inner.dog</h1>
            <div className= "nav__items">
                <Search handleInput={handleInput} searchTerm={searchTerm}/>
                <FiltersList checkBoxABV={checkBoxABV} checkBoxRange={checkBoxRange} checkBoxPh={checkBoxPh}/>
            </div>
        </div>
        </>
    )
}

export default Nav