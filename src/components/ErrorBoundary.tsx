'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    errorMsg: string;
    errorStack: string;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        errorMsg: '',
        errorStack: ''
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMsg: error.message, errorStack: error.stack || '' };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 bg-red-900 text-white z-50 relative">
                    <h2>Sorry.. there was an error</h2>
                    <pre className="text-xs whitespace-pre-wrap">{this.state.errorMsg}</pre>
                    <pre className="text-xs whitespace-pre-wrap mt-2">{this.state.errorStack}</pre>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
