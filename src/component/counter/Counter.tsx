import * as React from "react";

class Counter extends React.Component {
    state = { count: 0, };
    constructor(props: any) {
        super(props);
         this.increasement = this.increasement.bind(this);
         this.decreasement = this.decreasement.bind(this);
    }

    increasement = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decreasement() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.increasement}>Increase</button>
                <button onClick={this.decreasement}>Decrease</button>
            </div>
        );
    }
}

export default Counter;