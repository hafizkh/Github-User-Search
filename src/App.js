import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Search from './components/Search';


const App = () => {
  const [user, setUser] = useState('')
  const [username, setUsername] = useState('')
  const [search, setSearch] = useState('')


  const startSearch = async () => {
    const url = `https://api.github.com/users/${username}`
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          alert("Something went wrong")
        }
      })
      .then(data => setUser(data))
  }
  const handleChange = ((e) => {
    setUsername(e.target.value)

  })

  const handleInput = ((e) => {
    setSearch(" ")

  })

  return (
    <div className='Container'>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/search' element={<Search username={username} setUsername={setUsername} 
          startSearch={startSearch} handleChange={handleChange} handleInput={handleInput} search={search} user={user} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App
