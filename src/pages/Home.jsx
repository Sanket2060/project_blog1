import React, { useEffect,useState } from 'react'
import {Container,PostCard} from '../components'
import service from '../appwrite/config';
function Home() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
    
    const post=service.getPosts().then(()=>{
        console.log(post);
        if (post){
            setPosts(post);
        }
    })
},[])
useEffect(() => {
  
  console.log(posts);

  
}, [posts])

    if (posts.length===0){
        return(
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login to 
                            read posts</h1>
                        </div>
                    </div>
                </Container>
            </div>


        )
    }
  return (
    <>
      <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {(posts.length>0)?posts.map((post)=>{
                    <div key={post.id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                }):null}
            </div>
        </Container>
      </div>
    </>
  )
}

export default Home