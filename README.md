# signals with preact :
- Signals aim to be an alternative for state management. In React, they look a little bit like the useRef hook. Yet, useRef has different purposes.


- When we want to make our state global, one solution is the context API. Signals, on the other hand, are global. If we create a signal outside a component, other components can access it like a global variable.


- signal is an object with a .value property that holds some value. Accessing a signal's value property from within a component automatically updates that component when the value of that signal changes.

- We can create state(signal) using signal function, signal function takes default signal(value) as an parameter and returns Proxy object. The value of the signal can be accessed using the signal.value property. We can also set the value of the signal using signal.value = newValue.

- React Hooks can only be called inside the root of the component, Signal can be used outside of a component.

- We don't have to pass dependencies array like the useEffect hook. It'll automatically detect dependencies and call effect only when dependencies change.

- Rendering optimizations : The Preact adapter ships with several optimizations it can apply out of the box to skip virtual-dom rendering entirely. If you pass a signal directly into JSX, it will bind directly to the DOM Text node that is created and update that whenever the signal changes.


## Installation

```bash
npm i @preact/signals-react




