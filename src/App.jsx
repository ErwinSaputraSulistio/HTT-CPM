import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Container, RouteGuard } from 'components'
import { 
  Home, 
  Login, 
  NotFound, 
  Product, 
  Register 
} from 'pages'

const App = () => {
  return(
    <BrowserRouter>
      <Container>
        <Routes>
          {/* If already login, can't access Login and Register pages */}
          <Route element={ <RouteGuard check='Login'/> }>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
          </Route>
          {/* If not login, can't access Product page */}
          <Route element={ <RouteGuard check='NotLogin'/> }>
            <Route path='/product' element={ <Product/> }/>
          </Route>
          {/* Home and Not Found pages can be accessed anytime */}
          <Route path='/' element={ <Home/> }/>
          <Route path='*' element={ <NotFound/> }/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App