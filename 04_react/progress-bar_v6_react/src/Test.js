import React, { Component } from 'react';
import ReactWebComponent from 'react-web-component';

class HelloMessage extends Component {
    render() {
        return <div>Hello World!</div>;
    }
}
ReactWebComponent.create(<HelloMessage />, 'my-component');
export default HelloMessage;