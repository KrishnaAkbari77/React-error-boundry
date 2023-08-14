import React, { Component } from 'react'
import "./App.css"
import User from './Class/User'
import Function from './function/Function'
import Errorboundry from './Class/Errorboundry'
import FunBoundry from './function/FunBoundry'

export class App extends Component {
  render() {

    return (
      <div className='App-header'>Error Boundry in React

        <Errorboundry fallback={<p>Something went wrong in class comoponent</p>}>
          <User />
        </Errorboundry>

        {/* <Errorboundry fallback={<p>Something went wrong in function comoponent</p>}>
          <Function />
        </Errorboundry> */}

        {/* <FunBoundry>
          <Function />
        </FunBoundry> */}

        {/* <Function/> */}
      </div >
    )
  }
}

export default App