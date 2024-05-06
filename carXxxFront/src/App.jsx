
import './App.css'
import List from './components/List'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import CarComponent from './components/CarComponent'
import HomePage from './components/HomePage'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import EnterPage from './components/EnterPage'
import MyCars from './components/MyCars'
import UpdateCarForm from './components/UpdateCarForm'

function App() {


  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/enterpage' element={<EnterPage/>}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          {/* // http://localhost:3000 */}
          <Route path='/' element={<List />}></Route>
          {/* // http://localhost:3000/cars */}
          <Route path='/allcars' element={<List />}></Route>
          {/* // http://localhost:3000/addcar */}
          <Route path='/addcar' element={<CarComponent />}></Route>
          {/* // http://localhost:3000/update/1 */}
          <Route path='/editcar/:id' element={<CarComponent />}></Route>
          {/* // http://localhost:3000/login */}
          <Route path='/login' element={<LoginForm />}></Route>
          <Route path='/registration' element={<SignupForm />}></Route>
          <Route path='/mycars' element={<MyCars />}></Route>
          <Route path='/update/:carId' element={<UpdateCarForm/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
