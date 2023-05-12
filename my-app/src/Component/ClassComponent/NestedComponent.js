import {Component} from "react";

class NestedComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company:'javarnd'
        }
    }


    render() {
        return (
            <div>Nested Component
                 <h1>{this.state.company}</h1>
            </div>
            
        )
    }
}

export default NestedComponent;