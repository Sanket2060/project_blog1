import React from 'react'

function Button({children,
type='button',
bgColor='bg-blue-600',
textColor='white',
className='',
...props             //usuage of ...props??  paxi extra properties like placeholder lai ni use 
//garna

}) {
  return (
   <button className={`${type} ${bgColor} ${textColor} ${className}`} {...props}>
    {children}
   </button>
    )
}

export default Button