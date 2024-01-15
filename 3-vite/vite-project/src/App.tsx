import React, { useState } from 'react'
import './App.css'
import { Button } from '@radix-ui/themes'
import { PageHome, PageInfo } from './pages'

const useToggle = () => {
  const [toggle, setToggle] = useState(false)

  const updateToggle = React.useCallback(() => setToggle((prev) => !prev), [])

  return [toggle, updateToggle]
}

const useGlobalEvent = (eventName: string, callback: () => void) => {
  const removeHandler = () => window.removeEventListener(eventName, callback)

  const initHandler = () => {
    if(!eventName) return;
    if(!callback) return;
    window.addEventListener(eventName, callback)

    return () => removeHandler()
  }


  React.useEffect(initHandler, [eventName, callback])
}

const useGlobalToggle = () => {
  const [toggle, handleToggle] = useToggle();
  useGlobalEvent('click', handleToggle as () => {})
  return [toggle, handleToggle]
}

function App() {
  
  const [toggle, handleToggle] = useToggle();

  return (
    <>
      <Button onClick={handleToggle as () => {}}>Toggle : {toggle.toString()}</Button>
      { !toggle && <PageHome /> }
      { toggle && <PageInfo /> }
    </>
  )
}

export default App
