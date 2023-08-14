import React, { Component } from 'react';

export class User extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        };
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         throw new Error('this is custom class error from setTimeout');
    //     }, 1000);
    // }

    componentDidUpdate(preProp, preState) {
        if (preState.counter != this.state.counter) {
            this.setState({ counter: this.state.counter + 1 });
        }
    }

    handleClick = () => {
        // try {
        //     throw new Error('this is custom class error')
        // } catch (error) {
        //     console.log(error);
        // }
        this.setState({ counter: this.state.counter + 1 });
    };

    render() {

        return (
            <div>
                This is class component.
                <br />
                <button onClick={this.handleClick}>Event Error</button>
            </div>
        );
    }
}

export default User;
