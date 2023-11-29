import React, { Component } from 'react'

export class ErrorBound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iserror: false
        }
    }
    static getDerivedStateFromError(error) {
        return { iserror: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by error boundary:', error, errorInfo);
    }
    render() {
        if (this.state.iserror) {
            // You can render any custom fallback UI here
            return <div>Something went wrong. Please try again later.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBound