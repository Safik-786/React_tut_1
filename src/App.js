import { useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route, useNavigate } from 'react-router-dom'

import React from "react";
import Team from './components/Team';
import { Contact, Email } from './components/Contact';
import EventHandler from './components/EventHandler';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Search from './components/Search';
import Validation from './components/Validation';






// const name = 'harry'
function App() {
  const [mode, setMode] = useState('light')     //  it notify whether darkmode is enable or not
  const [alert, setAlert] = useState('')
  const navigate = useNavigate()

  const NavigateToAbout = () => {
    navigate('/contact')
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("")
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#010230'
      showAlert("! Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("! white Mode has been enabled", "danger")
    }
  }
  const NavigateToWhere = () => {
    let pageName = prompt("Enter page name you want to go")
    if (pageName === "about") {
      navigate('/about')
    }
    else if (pageName === "contact") {
      navigate('/contact')
    }
    else if (pageName === "team") {
      navigate('/team')
    }
    else if (pageName === "event handle") {
      navigate('/event')
    }
    else {
      navigate('*')
    }

  }


  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={

          <>
            <div className="container my-3">
              <TextForm heading="Enter the text to Analyse below" mode={mode} showAlert={showAlert} />
            </div>
          </>

        } />

        <Route path="/" element={<Alert alert={alert} />} />
        <Route path="/products" element={<Products />} >
          <Route path='shirts' element={<Shirts />} />
          {/*back slash is not used as it is an absolute path*/}
          <Route path='jeans' element={<Jeans />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/validate" element={<Validation />} />
        <Route path="/event" element={<EventHandler name="Adil Bhai" />} />
        <Route path='/contact' element={
          <>
            <div className='text-primary-emphasis'>
              <Contact />
              <Email />
            </div>

          </>
        } />
        <Route path="/users" element={<Users />} >
          {/* <Route path=":id" element={<UserDetails/>} /> */}
          <Route path=":id" element={<UserDetails />} />
          {/*    :id -> variable take string after checking all the fixed route  */}
          <Route path="admin" element={<Admin />} />
        </Route>
          

      </Routes>

      <button onClick={() => navigate('/about')} style={{ display: 'inline', margin: '5px 50px', backgroundColor: 'Blue', border: '2px solid blue', borderRadius: "3px",color:"white" }}>goTo About</button>

      <button onClick={() => navigate('/team')} style={{ display: 'inline', margin: '5px auto', backgroundColor: 'Blue', border: '2px solid blue', borderRadius: "3px",color:"white" }}>goTo Team</button>

      <button onClick={() => NavigateToAbout()} style={{ display: 'inline', margin: '5px 50px', backgroundColor: 'Blue', border: '2px solid blue', borderRadius: "3px",color:"white" }}>goTo contact</button>


      <button onClick={() => NavigateToWhere()} style={{ display: 'inline', margin: '5px 50px', backgroundColor: 'Blue', border: '2px solid blue', borderRadius: "3px",color:"white" }}>click me to navigate</button>

      <button onClick={() => navigate(-1)} style={{ display: 'inline', margin: '5px 50px', backgroundColor: 'Blue', border: '2px solid blue', borderRadius: "3px",color:"white" }}>go back
      </button>










      {/* 
          

          <div className="container my-3">
          <TextForm heading="Enter the text to Analyse below" mode={mode} showAlert={showAlert} />
          <About />
            
          </div>
       */}

    </>
  );
}

export default App;
