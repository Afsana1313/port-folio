import React from 'react'
import Button from './Button'

 const DemoItem = (props) => {
    const { id, name, link, description, color, imageLink, tech } = props.demo
  return (
      <div
          className='demo-item'
          style={{ backgroundColor: color }}
          key={id}>
          {/* {name}
          <Button/> */}
          <div className='demo-item-left'>
               <img
              src={`${imageLink}`}
              alt={`${name} ${description}`
              } />
          </div>
          <div className='demo-item-right'>
              <strong>Project Name:</strong> {name} <br />
              <strong>description:</strong> {description} <br />
              <strong>Technology: </strong> {tech} <br />
              <button className='visit-btn'><a href={`${link}`}>Visit site</a></button>
          </div>
    </div> 
  )
}
export default DemoItem