import React, { Component } from 'react';
// import d1 from './images/dice1.png'
// import d2 from './images/dice2.png'
// import d3 from './images/dice3.png'
// import d4 from './images/dice4.png'
// import d5 from './images/dice5.png'
// import d6 from './images/dice6.png'

class Diceroll extends Component {
    constructor() {
        super()
        this.state = {
            currentNumber: null,
            logBook: []

        }
    }

    rolling = () => {
        let {currentNumber, logBook} = this.state;
        let randomNum = Math.floor(Math.random() * 6 + 1);
        let logGenerator = this.state.logBook.concat([randomNum])
        this.setState({ currentNumber: randomNum });
        this.setState({ logBook: logGenerator })
    }

    render() {
        let { currentNumber, logBook } = this.state;
        return (
            <div id="displayZone">
                <div>
                    <button class={'d'+currentNumber} id="senorDice" onClick = {this.rolling}>
                    { currentNumber === null ? 'Click me!' : '' }
                    </button>
                </div>
                <div>
                    <h3> Look your luck right in the eyes </h3>
                    <p class="numberTown">{ logBook.join(", ") }</p>
                    {/*
                        this is the map-into-list version
                        <ul>{ logBook.map(roll => <li>{roll}</li>)}</ul>
                        */}
                </div>
            </div>

        )
    }

}


export default Diceroll;
