import React from 'react';
import PostsList from './PostsList';

class Blog extends React.Component{


    render() {
        return (
            <div className="blog ui container">
                <div className="ui grid">
                    <div className="four wide column">
                        <PostsList></PostsList>
                    </div>
                    <div className="twelve wide column">
                        <p>Aquí irá el detalle</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;