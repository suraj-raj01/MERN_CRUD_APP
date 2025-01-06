import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './Components/Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Update from './pages/Update'
import Search from './pages/Search'
import RecentActivity from './HomeComp/RecentActivity'
import RecentDelete from './HomeComp/RecentDelete'
import RecentAdd from './HomeComp/RecentAdd'
import Edit from './pages/Edit'
import Details from './pages/Details'
import Register from './Login/register'
import Login from './Login/Login'
import YearsData from './HomeComp/YearsData'
import UserDashboard from './Login/UserDashboard'
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='home' element={<Home/>}>
                <Route index element={<RecentActivity/>}/>
                <Route path='recent' element={<RecentActivity/>}/>
                <Route path='yeardata' element={<YearsData/>}/>
                <Route path='delete' element={<RecentDelete/>}/>
                <Route path='add' element={<RecentAdd/>}/>
              </Route>
              <Route path='insert' element={<Insert/>}/>
              <Route path='editdata/:id' element={<Edit/>}/>
              <Route path='details/:id' element={<Details/>}/>
              <Route path='display' element={<Display/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='update' element={<Update/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='update' element={<Update/>}/>
              <Route path='userdashboard' element={<UserDashboard/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
