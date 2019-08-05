import React from 'react';
import axios from 'axios';

class PostsList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then( (res) => {
            this.setState ({
                posts: res.data
            })
        }).catch(console.log)
    }

    render(){
        return (
            <div className="posts-list">
                <div className="ui relaxed divided list">
                    {
                        this.state.posts.map( item => {
                            return (
                                <div className="item" key={item.id}>
                                    <i className="large github middle aligned icon"></i>
                                    <div className="content">
                                    <a href="google.com" className="header">{item.title}</a>
                                    <div className="description">Usuario {item.userId}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default PostsList;