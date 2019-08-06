import React from 'react';

export class PostDetail extends React.Component{


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
                        <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/jenny.jpg" alt="img"></img>  Jenny 
                    </div>
                </div>
            </div>
        )
    }
}