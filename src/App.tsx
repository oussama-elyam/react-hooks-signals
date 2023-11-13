import { useEffect, useRef } from 'react'
import './App.css'
import { signal } from '@preact/signals-react'
// import { createSignal } from 'solid-js';


//create global store with signals ,Signals can be used inside or outside of components, unlike hooks.
const firstSignal = signal(0)//create a signal with value 0

const AnotherComponent = () => {

  const count = useRef(0)
  console.log("i will be rendered just in first render");


  useEffect(() => {
    count.current++
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* access a signal object with .value */}
          signale value : {firstSignal.value}
        </p>

        {firstSignal.value > 0.5 ? '0.5+' : '0.5-'}

        <button className=" border-1 bg-blue-200 App-link" onClick={() => firstSignal.value = Math.random()}>change the value of the signal randomly:</button>


        <h1>Total re-renders of child: {count.current}</h1>

      </header>
    </div>
  )
}

function App() {
  const count = useRef(0)

  useEffect(() => {
    count.current++
  })
  console.log("i will be rendered just in first render");

  return <>

    <AnotherComponent />
    {/* you will notice that the parent component do not re-render whene we change the value of <AnotherComponent />, 
    in this case only child will re-render : the render will happened only in the component who use the signals */}
    <h1>Total re-renders in parent: {count.current}</h1>
  </>
}

export default App


// const NewEx = () => {
//   const [counter, setCounter] = createSignal(0);

//   console.log('SolidJS: Rerendering');

//   return (
//     <div>
//       <h2>Counter: {counter()}</h2>
//       <button onClick={() => setCounter(counter() + 1)}>Increment</button>
//     </div>
//   );
// }