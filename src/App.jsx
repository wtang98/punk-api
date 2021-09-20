import React, {useState, useEffect} from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav"
import Results from './components/Results/Results';

const App = () => {
  // Gets search input and cleans it
  const [searchTerm, setSearchTerm] = useState("")
  const handleInput = (e)=> {
    e.preventDefault();
    const cleanedSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(cleanedSearchTerm)
  }
  
  //Api hooked up
  const [beers, setBeers] = useState([]);
  const UseBeerApi = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => response.json())
    .then((beerData) => setBeers(beerData))
    .catch((err) => console.log(err));
  }
    useEffect(UseBeerApi, []); // need this dont know why?

    //Filters the Api return with the search term
    const results = beers.filter(beer => {
          const resultsName = beer.name.toLowerCase();
          return resultsName.includes(searchTerm) && beer.image_url;
      })

    // checkbox filters
    // const checkBoxABV = (e) => {
    // if(e.target.checked){
    // return setBeers(beers.filter(beer => beer.abv >6))
    // }else{
    // return UseBeerApi()
    // }
    // }
    // const checkBoxRange = (e) => {
    //   if(e.target.checked){
    //   return setBeers(beers.filter(beer => beer.first_brewed.split("/")[1]<2010))
    //   }else{
    //   return UseBeerApi()
    //   }
    //   }
    // const checkBoxPh = (e) => {
    //   if(e.target.checked){
    //   return setBeers(beers.filter(beer => beer.ph < 4))
    //   }else{
    //   return UseBeerApi()
    //   }
    //   }
    //filters using ternaries better?
    const checkBoxABV = (e) => {e.target.checked ? setBeers(beers.filter(beer => beer.abv > 6)) : UseBeerApi()};
    const checkBoxRange = (e) => {e.target.checked ? setBeers(beers.filter(beer => beer.first_brewed.split("/")[1]<2010)): UseBeerApi()}
    const checkBoxPh = (e) =>{e.target.checked ? setBeers(beers.filter(beer => beer.ph < 4)): UseBeerApi()}


    // maps onto the results card. dont know why other way wont work
    const beersList = results.map((beer) => {
      return <Results beer={beer}/>
    })

  return (
    <div className="punk">
      <div className = "punk__page">
        <div className = "punk__page-n">
          <Nav handleInput={handleInput} searchTerm={searchTerm} checkBoxABV={checkBoxABV} checkBoxRange={checkBoxRange} checkBoxPh={checkBoxPh}/>
        </div>
        <div className = "punk__page-r">
          {beersList}
        </div>
      </div>
    </div>
  );
}

export default App;
