import React , { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderInput = ({input, label, meta}) => {
        return (
            <div className='field'>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    renderError = ({touched, error}) => {
        if (touched && error){
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    // does not need to pass event 
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() { 
        return ( 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='title' component={this.renderInput} label='Title' />
                <Field name='description' component={this.renderInput} label='Description'/>
                <button className='ui button primary'>Submit</button>
            </form>
         );
    }
};

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'You must enter a title!'
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description!'
    }
    return errors;
}
 
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

