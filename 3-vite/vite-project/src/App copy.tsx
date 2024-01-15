import React, { useState } from 'react'
import './App.css'
import { Button } from '@radix-ui/themes'
import { PageHome, PageInfo } from './pages'

interface HeaderProps {
  title: string
}

function Header(props: HeaderProps){
  return (
    <div>Headers {props.title}</div>
  )
}

function Footer(){
  return (
    <div>Footer</div>
  )
}

interface MainProps {
  children: React.ReactNode
}

function Main(props: MainProps){
  return (
    <div>Main {props.children}</div>
  )
}

const heavy = () => {
  return (new Array(10000000)).fill(1).map( (v,i)=> v * i)
}

/**
 * Explication of the hooks to display in the info panel
 * @returns hooks
 */
const useCounter = () => {
  const [count, setCount] = useState(0)

  const updateCount = React.useCallback(()=> setCount( (prev) => prev + 1 ), [])
  const collection = React.useMemo( heavy,[])

return [ count , updateCount, collection ]

}

function Counter(){
  const [ count, updateCount, collection ] = useCounter();

  return (
    <>
      { (collection as Array<Number>).length }
      {count} <Button onClick={updateCount as () => {}}>+</Button>
    </>
  )
}

// interface AppProps {
//   [key: string]: any
// }

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleFunction = React.useCallback( () => setToggle( (prev) => !prev ), []);

  return (
    <>
      <Header title="Application"/>
      <Main>
        App <Counter />
      </Main>
      <Button onClick={ toggleFunction }>Toggle {toggle.toString()}</Button>
      { !toggle && <PageHome /> }
      { toggle && <PageInfo /> }
      <Footer />
    </>
  )
}

export default App
