import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

const Colors = ({handleChange}) => {
  return (
    <div className='price-title'>
      <h1 className='sidebar-title'>Colors</h1>
      <label className="sidebar-label-container">
            <input onChange={handleChange} value="" name="test2"type="radio" />
            <span className="checkmark all"></span>All
        </label>
        <Input handleChange={handleChange}
        value="black"
        title="Black"
        name="test2"
        color = "Black"
        />
        <Input handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test2"
        color = "Blue"
        />
        <Input handleChange={handleChange}
        value="red"
        title="Red"
        name="test2"
        color = "red"
        />
        <Input handleChange={handleChange}
        value="green"
        title="Green"
        name="test2"
        color = "green"
        />
        <label className="sidebar-label-container">
            <input onChange={handleChange} value="white" name="test2"type="radio" />
            <span className="checkmark"></span>White
        </label>
    </div>
  )
}



export default Colors