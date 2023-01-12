import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F11%2FZillow-Logo.png&imgrefurl=https%3A%2F%2F1000logos.net%2Fzillow-logo%2F&tbnid=-6JlcA0BkDIC4M&vet=12ahUKEwiEj_SC2sL8AhUhs3IEHWk5AesQMygBegUIARC7AQ..i&docid=BdLxlFnYnmUy-M&w=2500&h=750&q=zillow%20logo&ved=2ahUKEwiEj_SC2sL8AhUhs3IEHWk5AesQMygBegUIARC7AQ" target="_blank">
          <img src="/zillow.svg" className="logo" alt="Zillow logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Kid-Friendly Real Estate</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
