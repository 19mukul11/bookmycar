import Home from './pages/Home'

import { Routes, Route } from "react-router-dom"

import "./styles/App.css"

function App() {

  return (
    <>
      <div id="outermost_container">
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
      </div>
    </>
  )
}

export default App
