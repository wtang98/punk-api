import './App.scss';
import Nav from "./components/Nav/Nav"
import Results from './components/Results/Results';

import data from "./data/data.js"


const App = () => {
  const filteredBeer = data.filter(beer => beer.image_url)
  
  return (
    <div className="punk">
      <div>
        <Nav/>
      </div>
      <div>
        <Results results={filteredBeer}/>
      </div>
    </div>
  );
}

export default App;
