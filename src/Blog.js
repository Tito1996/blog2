import React from 'react';
import PostsList from './PostsList';
import { PostDetail } from './PostDetail'

class Blog extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selected: null,
        }
    }
    
    handlePostClick = item => {
        console.log(item.target)
        this.setState({
            selected: item,
        })
    }


    render() {
        return (
            <div className="blog ui container">
                <div className="ui grid">
                    <div className="four wide column">
                        <PostsList handlePostClick={this.handlePostClick}></PostsList>
                    </div>
                    <div className="twelve wide column">
                    {this.state.selected ? < PostDetail item ={this.state.selected}></PostDetail> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;