import { useState } from 'react'
import './App.css'
import Navigation from './customer/components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      <Navigation/>
     
     
    </div>

    </>
  );
}

export default App
