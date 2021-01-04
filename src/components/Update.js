import React, {Component} from 'react';

class Update extends React.Component {
    constructor()
    {
        super();
        console.log(" constructor");
        this.state={
            data:false
        }
    }

    componentDidMount()
    {
        console.log("componentDidMount");
        this.setState({data:true})
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>ComponentDidMount Life cycle</h1>
            </div>
        )
    }

}

export default Update;