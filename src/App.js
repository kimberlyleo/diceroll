import React, { Component } from 'react';
import Diceroll from './Diceroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            currentNumber: null,
            logBook: []

        }
    }

    render() {
        return(

            <div>
                <div id="title"><h1>DICE-a-RONI</h1></div>

                <Diceroll />
            </div>
        )
    }
}

export default App;
