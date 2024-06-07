import React from "react";
import { json } from "react-router-dom";

class UserCardClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "dummy",
            location: "dummy"
        }
    }

    async componentDidMount(){

            const getUserInfo = await fetch("https://api.github.com/users/preti15")
            const json = await getUserInfo.json();
            console.log(json)
        
        this.setState(
            {
                name: json.name,
                location: json.location
            }
        )
    }
    
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        const {name, location} = this.state
        return(
            <div>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserCardClass;