import {Component} from "react";
import NestedComponent from "./NestedComponent.js"

class FirstClassComponent extends Component {
    constructor(props) {
        console.log('running constructor')
        super(props)
        this.state = {
            name:'vaibhav'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            console.log('Before Updating')
        }, 1000);
    }

    changeName = () => {
            console.log('running')
            this.setState ({
                name: 'vishap'
            })
    }

    componentDidUpdate() {
            setTimeout(() => {
                console.log('After Updating')
            }, 1000);
    }

    shouldComponentUpdate() {
        return true
    }

    render() {
        console.log('running render')
        const {city, work, show, print} = this.props
        let user
        if(show) {
            user = 'User Found'
        } else {
            user = 'User not found'
        }
        return (
            <div>Class Component
                 <h1>{this.state.name}</h1>
                 <h1>{city}</h1>
                 <h1>{work}</h1>
                 {/* {show ? <div>User Found</div> : <div>User not found</div>} */}
                 {/* {show && <div>User Found</div>} */}
                 <div>{user}</div>
                 <button onClick={() => print('vaibhav')}>Change Name</button>
                 <NestedComponent />
            </div>
            
        )
    }
}

export default FirstClassComponent;