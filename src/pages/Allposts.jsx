import React, { useState } from 'react'
import { Container,PostCard } from '../components'
import service from '../appwrite/config'
function Allposts() {
    const [posts,setPosts]=useState([]);
    service.getPosts(([])
    .then((posts)=>{
       if (posts){
        setPosts(posts.documents);
       }
    }))
  return (
    <div className='w-full py-8'>
        <Container>
          {posts.map((post)=>{
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post}/>
            </div>
          })}

        </Container>

    </div> 
    )
}

export default Allposts