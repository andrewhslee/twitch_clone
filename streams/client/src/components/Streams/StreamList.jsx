import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

class StreamList extends Component {
    componentDidMount() {
        this.props.getStreams();
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className='item' key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>
                        {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderAdminButtons(stream) {
        if(stream.userId === this.props.currentUserId){
            return(
                <div className='right floated content'>
                    <button className='ui button primary'>Edit</button>
                    <button className='ui button negative'>Delete</button>
                </div>
            );
        } 
        return null
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign : 'right'}}>
                    <Link className = 'ui button primary' to='/streams/new'>Create new stream</Link>
                </div>
            );
        }
    }

    render() { 
        return ( 
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
         );
    }
    
}

const mapStateToProps = (state) => {
    return { 
        streams : Object.values(state.streams),
        currentUserId : state.auth.userId,
        isSignedIn : state.auth.isSignedIn,
    }
};
 
export default connect(mapStateToProps, { getStreams })(StreamList);