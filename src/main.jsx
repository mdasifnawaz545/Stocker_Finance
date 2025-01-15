import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './components/layout/Layout'
import Signup from './components/auth/Signup'
import Home from './components/Home/Home'
import { Provider } from 'react-redux'
import store from './store/store'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<Home />}/>
        {/* <Route /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
)
