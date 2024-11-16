import React from 'react'
import './Service.css'
import pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='services' className='service'>
      <div className='service-title'>
        <h1>My Services</h1>
       
      </div>
      <div className="service-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='format'>
              <h3 >{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='readmore'>
              </div>
          </div>
        })}
      </div>
    </div>
  )
}
import './Service.css'

export default Service
