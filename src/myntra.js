import React, {useState} from "react";
import ReactDOM from "react-dom/client"

import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


console.log(arr);

function App(){

  let [A, setA] = useState(arr);
  function sortArray(){
    A.sort((a,b)=> a.price-b.price);
    setA([...A]);
    console.log(arr);
  }

function priceAbove5000(){
  const B = arr.filter((value)=>value.price>5000);
  setA(B);

}

  return(<>
    <Header/>
    <button onClick={sortArray}>Sort By price</button>
    <button onClick={priceAbove5000}>Price Above 5000</button>
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
          A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price={value.price}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
