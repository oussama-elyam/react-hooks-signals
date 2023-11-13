import { useEffect, useRef, useState } from 'react'
import './App.css'


const AnotherComponent = () => {
  const [countHooksState, setcountHooksState] = useState(0);


  return (
    <div className="App">
      <header className="App-header">

        <p>
          hook value : {countHooksState}
        </p>
        <button className=" border-1 bg-blue-200 App-link" onClick={() => setcountHooksState(countHooksState + 1)
        }>change the value of the use state hook randomly:</button>


      </header>
    </div>
  )
}

function App() {
  const count = useRef(0)

  useEffect(() => {
    count.current++
  })
  console.log("this console will be rendered only in first render");
  return <>
    <AnotherComponent />
    <h1>Total re-renders in parent: {count.current}</h1>
  </>
}

export default App
