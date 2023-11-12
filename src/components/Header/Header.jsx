import React from 'react'
import {LogoutButton,Container,Logo} from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'  //New thing to learn
import { useSelector } from 'react-redux'
function Header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate();
  const navItem=[{
     name:'Home',
     slug:'/',   //url
     active:true
  },
  {
    name:'Login',
    slug:'/login',   
    active:!authStatus
  },
  {
    name:'Signup',
    slug:'/signup',   
    active:!authStatus
  },
  {
    name:'All Posts' ,
    slug:'/all-posts',   
    active:authStatus
  },
  {
    name:'Add post',
    slug:'/add-post',   
    active:authStatus
  }


  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'></nav>
         <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/> 
            </Link>
         </div>
         <ul className='flex ml-auto'>
            {navItem.map((item)=>
            item.active?(<li key={item.name}>
              <button onClick={()=>{navigate(itme.slug)}}>{item.name}</button>   {/*usuage of 
              navigate from react router   */}
            </li>):null
            )}
            {authStatus && (
            <li>
              <LogoutButton/>
            </li>) }    {/* logout button using different 
            syntax */}
         </ul>


      </Container>
       </header> 
    )
}

export default Header