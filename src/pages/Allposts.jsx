import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../components'
import service from '../appwrite/config'
function Allposts() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
      service.getPosts()
    .then((posts)=>{
       if (posts){
        setPosts(posts.documents);
       }
    })
    },[])
    
    useEffect(() => {
      console.log(posts);
      console.log(posts[0].$id);
      console.log(posts[0].featuredimage);

    }, [posts])
    
  return (
    <div className='w-full py-8'>
        <Container>
          {posts.map((post)=>(   //why with brackets without return statement works->() means return
          //even without return statement
          <div key={post.$id} className='p-2 w-1/4'>
              <PostCard post={post}/>
            </div>
            ))}

        </Container>

    </div> 
    )
}

export default Allposts