import React from 'react';
import axios from 'axios';

export class PostDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.item.userId}`).then(
            res => {
                this.setState({
                    user: res.data
                })
            }
        ).catch(console.log)
    }
/* JEJEJEJEJEJEJEJEJE */
    render(){

        return(
            <div className="ui card">
                <div className="content">
                    <div className="center aligned header">{this.props.item.title}</div>
                    <div className="center aligned description">
                        <p>{this.props.item.body}</p>
                        {this.props.children}
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" alt="img"></img>
                        {this.state.user ? this.state.user.name: ""}
                    </div>
                </div>
            </div>
        )
    }
}