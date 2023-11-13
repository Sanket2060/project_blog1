import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './components/Authlayout.jsx'
import {Home,Login,SignUp,AllPosts,AddPost,EditPost,Post} from './pages/PagesIndex.js'

const router=createBrowserRouter([     //Routing overall kasari kaam garxa bujna parni xa.
  {
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:"/login",
      element:
      (   // ( le garda multiple component rakhna milxa ra div pani
        <AuthLayout authentication={false}>    {/* kina yo component le wrap garna pareko */}
          <Login/>
        </AuthLayout>
      )
    },
      {
      path:'/signup',
      element:(
        <AuthLayout authentication={false}>
          <SignUp/>
        </AuthLayout>
      )
    },
    {
      path:'/all-posts',
      element:(
        <AuthLayout authentication>
          {" "}
          <AllPosts/>
        </AuthLayout>
      )
    },
    {
      path:'/add-post',
      element:(
        <AuthLayout authentication>
          {" "}
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path:'/edit-post/:slug',
      element:(
        <AuthLayout authentication>
          {" "}
          <EditPost/>
        </AuthLayout>
      )
    },
    {
      path:'/post/:slug',
      element: <Post/>,      
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
