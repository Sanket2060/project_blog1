import React from 'react'
import { useId } from 'react'

function Select({
  options,
    label,         //k airaxa yo label ma?
    className="",
    ...props},ref) {
  const id=useId()
  return (
       <div>
         {label && <label className='w-full' htmlFor={`${id}`}>{label}</label>}
          <select {...props}  name="" id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white
          text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}>
          {options.map((option)=>{
              return(
                <option key={option} className='' value={option}>{option}</option>
                )
            })}
            </select>

       </div>
    )
}

export default React.forwardRef (Select)  //another way of defining forward ref to a child
//component 