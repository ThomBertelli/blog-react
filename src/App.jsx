import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BlogLayout } from './components/BlogLayout'
import { Home } from './pages/Blog/home'
import { PostDetail } from './pages/Blog/postDetail'

function App() {

  const appRouter = createBrowserRouter([
    {
      path:'',
      element: <BlogLayout/>,
      children:[ 
        {

          path:'',
          element: <Home/>
  
        },

        {

          path:'post/:id',
          element: <PostDetail/>
  
        },
      
      ]
    }


  ])
    

  return (
      <RouterProvider router={appRouter}/>
  )

}

export default App