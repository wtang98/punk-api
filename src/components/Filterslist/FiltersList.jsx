import React, {useState} from 'react'
import "./FiltersList.scss"

const FiltersList = (props) => {
    const {checkBoxABV, checkBoxRange, checkBoxPh} = props

    return (
        <>
        <div className="container">
            <form className="fix">
                <input name = "abv" type="checkbox" id="HighABV" value=""  onClick={checkBoxABV} />
                <label For="HighABV">High Abv +6.0%</label>
            </form>
            <form className="fix1">
                <input name = "classic" type="checkbox" id="ClassicRange" value="" onClick={checkBoxRange} />
                <label For="ClassicRange">Classic Range</label>
            </form>

            <form className="fix2">
                <input name = "acid" type="checkbox" id="Acidity" value="" onClick={checkBoxPh} />
                <label For="Acidity">Acidity ph lower than 4</label>
            </form>
        </div>
        </>
    )
}

export default FiltersList
