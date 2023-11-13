import React from 'react'

function Container({children}) {   //What is the usecase of this file???
  return (   //for single lined returns () can be ignored.
    <div className='w-full mx-auto max-w-7xl px-4'>{children}</div>
  )
}

export default Container