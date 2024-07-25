import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank' > visit google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'}
  ,'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
 reactElement
) 
