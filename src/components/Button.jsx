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
   <button className={`${bgColor} ${textColor} ${className}`} type={type} {...props}>
    {children}
   </button>
    )
}

export default Button
//Description about children and ...props(spread operator)->https://chat.openai.com/share/8c615cf7-4649-4b53-85f8-cd95eda202f7


