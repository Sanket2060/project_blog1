import React from 'react'
import { PostForm,Container } from '../components'
function AddPost() {
  return (
     <div className="py-8">
        <Container>             {/* Why to surround the component by Container named component */}
            <PostForm/>
        </Container>
     </div>
    )
}

export default AddPost