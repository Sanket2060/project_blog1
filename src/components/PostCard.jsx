import React, { useEffect } from 'react'
import AppwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredimage}) {
  useEffect(()=>{  
    console.log(`Data:`,$id,title,featuredimage);  //Why is it showing  undefined??
  },[]);
  return (
    <Link to={`/posts/${$id}`}>
       <div className='w-full bg-gray-100 rounded-xl p-4'>
         <div className='w-full justify-center mb-4'>
            <img src={AppwriteService.getFilePreview(`${featuredimage}`)} alt={title} srcset="" className='rounded-xl' />
         </div>
          <h2 className='text-xl font-bold'>{title}</h2>
       </div>
     </Link>
  )
}
   
export default PostCard