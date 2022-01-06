import './App.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';

function App() {
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    " Ananas",
    "comosus", ,
    "glabra",
    "muricata",
    "Vitis vinifera",
    "Anone des marais",
    "Arbouse",
    "Yucca filifera",
    "Ziziphus jujub",
    "Yucca filifera"

  ];

  const [filterList, setFilterList] = useState(fruits);

  const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(fruits);
      return;
    }
    const filteredValues = fruits.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="app">
      <div>
       <input className='search' type="search" onChange={handleSearch} />
      </div>
      {
        filterList.map((item) => (
          <div className='fruit'>{item}</div> 
        ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
