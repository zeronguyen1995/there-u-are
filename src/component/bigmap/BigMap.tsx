import * as React from 'react';
import './BigMap.css'

interface Props{
    greeting: { a : string, b : number}
}

class BigMap extends React.Component<Props>{
    render() {
        return(
            <div>
                <p className = "welcome"> {this.props.greeting.a} { this.props.greeting.b} </p>
            </div>
        );
    }
}

export default BigMap