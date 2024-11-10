import React from 'react'
import '../app/styles/heading.css'

interface propstype {
    title: string
}

const Heading: React.FC<propstype> = ({title}) => {
  return (
    <div className='heading-container'>
        <p className='heading-title'>{title}</p>
      
    </div>
  )
}

export default Heading
