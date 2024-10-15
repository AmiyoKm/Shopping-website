import { useState } from "react"
import Nav from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import products from  './db/data.jsx'
import Card from "./components/Card"




function App() {
 const [selectedCategory , setSelectedCategory] = useState('');
 const [query , setQuery] = useState('');

 const handleInputChange = event =>{
   setQuery(event.target.value)
 }

 const filteredItems = products.filter(products => products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

 const handleChange = event =>{
   setSelectedCategory(event.target.value)
 }

 const handleClick  = event =>{
   
   setSelectedCategory(event.target.value)
 }
  function filteredData(products , selected ,query){
    let filteredProducts = products;
    if(query){
      filteredProducts = filteredItems;
    }
    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title})=>{
        return category === selected || color === selected || company === selected || newPrice === selected || title === selected;
      })
    }
    return filteredProducts.map(({img,title,start,reviews,prevPrice , newPrice})=>(
      <Card 
      img={img} 
      title={title}
      start={start}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
    )

    )
  }
  const result = filteredData(products , selectedCategory , query)
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav/>
      <Recommended />
      <Products/>
    </>
  )
}

export default App
