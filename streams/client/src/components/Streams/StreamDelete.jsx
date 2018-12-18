import React , { Component }from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions';

class StreamDelete extends Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    renderActions() {
        const {id} = this.props.match.params;
       return (
            <React.Fragment>
            <Link to='/' className='ui button'>Cancel</Link>
            <button onClick={() => {this.props.deleteStream(id)}}className='ui button primary'>Delete</button>
            </React.Fragment>
        );
    }


    render() {
        return (
            <Modal 
            onDismiss={() => history.push('/')}
            title='Delete stream' 
            content={`Are you sure you want to delete the stream : ${this.props.stream ? this.props.stream.title : ''}`}
            actions={this.renderActions()}
            />
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);