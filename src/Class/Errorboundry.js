import { Component } from 'react'

export class Errorboundry extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("error---->", error, info);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}


export default Errorboundry