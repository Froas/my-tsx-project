import React from 'react'
import { Counter } from "./components/counter/Counter"
import { ToDo } from './components/toDo/ToDo'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <> 
      <Router>
        <Switch>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>  
        </Switch>
        
      </Router>
    </>
  )
}

export default App
