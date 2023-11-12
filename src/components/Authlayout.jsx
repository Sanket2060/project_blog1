//Can't understand this file much ->From react hooks

import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const authstatus=useSelector((state)=>state.auth.status);  //why state.auth.status and not just
//state.status

export default function Protected({children,authentication=true}) {
    const [loader, setLoader] = useState(true)
    const navigate=useNavigate();
    useEffect(() => {
      if (authentication && authstatus !== authentication){     //nabujiney if else statement???
        navigate("/login");
      } else if(!authentication && authstatus !== authentication){
        navigate("/");
      }                         
    

      setLoader(false)                           
    }, [authstatus,authentication,loader])
    





  return (
    <>
    {loader?(<h1>Loading...</h1>):children}
    </>
  )
}
