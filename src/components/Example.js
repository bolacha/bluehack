import React, { Component } from 'react';


export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyUp : false,
            valid : true
        }

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.displayAlert = this.displayAlert.bind(this);
    }

    handleKeyUp(evt) {
        if(evt.target.value.length === 0 ) {
            this.setState({keyUp: false, valid: false});
        } else {
            this.setState({keyUp: true,  valid: true});
        }
    }

    displayAlert() {
        if (!this.state.valid) {
            return (
                <p className="form-signin-warning text-center">Required Field</p>
            );
        }

    }

    render() {

        const { idInput, type, label, placeholder } = this.props;
        const { keyUp, valid } = this.state;

        return (
            <label className={ !keyUp ? 'form-signin-tops empty' : 'form-signin-tops' } htmlFor={idInput}>
                <span className="form-signin-labels">{label}</span>
                { this.displayAlert() }

                <input type={type} id={idInput} className={ !valid ? 'form-control form-signin-invalid' : 'form-control' } onKeyUp={this.handleKeyUp} onChange={this.props.onChange} value={this.props.value} placeholder={placeholder}></input>
            </label>
        );
    }
}
