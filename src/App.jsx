import { useState , useEffect, use } from 'react'
import Header from './components/Header';
import {Route , Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';



function App() {

  const[HTML , setHTML] = useState('')
    useEffect(() =>{
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://wikipedia.org')}`)
                .then(response => {
                      if (response.ok) return response.json()
                      throw new Error('Network response was not ok.')
                    })
                .then(data => setHTML(data.contents));
    } , [])



  return (
    <>
    <Header />
    <div className=' text-white w-full min-h-screen p-5'>
      
      



      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>


    </div>
    </>
  )
}

export default App
