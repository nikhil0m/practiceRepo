import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Count from './component/count'
import Toggle from './component/Toggle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{gap:"20px", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{fontSize:"32px",fontWeight:"bold",color:"Red"}}>NIKHIL RAJ</div>
        <div style={{fontSize:"24px",fontWeight:"bold",color:"Green"}}>Welcome to React</div>
        <Count />
        <Toggle />
      </div>

    </>
  )
}

export default App
