import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`body${darkMode ? " dark" : " light"}`}>
        <div>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <button onClick={() => setDarkMode(!darkMode)}>Dark-Light Mode</button>
        </div>
      </div>
    </>
  )
}

export default App
