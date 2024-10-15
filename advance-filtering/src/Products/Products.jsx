import React from 'react'
import './products.css'

import Card from '../components/Card'
const Products = ({result}) => {
  return (
    <div>
        
        <section className="card-container">
            {result}
        </section>
    </div>
  )
}

export default Products