
import './App.css'
import List from './components/List'
import HeaderComponent from './components/HeaderComponent'
import FooterComponet from './components/FooterComponent'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import CarComponent from './components/CarComponent'
import HomePage from './components/HomePage'
import LoginComponent from './components/LoginComponent'
import RegistrationComponent from './components/RegistrationComponent'

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <HomePage/> */}
        <Routes>
          <Route path='/home' element={<HomePage />}></Route>
          {/* <Route path='/signin' element={<LoginComponent />}></Route>
          <Route path='/signup' element={<RegistrationComponent />}></Route> */}
          {/* // http://localhost:3000 */}
          <Route path='/' element={<List />}></Route>
          {/* // http://localhost:3000/cars */}
          <Route path='/allcars' element={<List />}></Route>
          {/* // http://localhost:3000/addcar */}
          <Route path='/addcar' element={<CarComponent />}></Route>
          {/* // http://localhost:3000/update/1 */}
          <Route path='/editcar/:id' element={<CarComponent />}></Route>
          {/* // http://localhost:3000/login */}
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/registration' element={<RegistrationComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
