import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import $ from 'jquery';
import { submitForm, resetForm } from '../actions/actions';

const alphaNumRegex = /^[a-z0-9]+$/i;

const validate = values => {
    const errors = {};

    if (!values.formInput) {
        errors.formInput = 'Required';
    } else if (values.formInput.length > 10) {
        errors.formInput = 'Max 10 characters are allowed';
    } else if (!alphaNumRegex.test(values.formInput)) {
        errors.formInput = 'Only letters and numbers';
    }
    return errors;
};

const renderField = ({ input, inputClass,label, type, meta: { touched, error, pristine }, btnDisabled, btnOnClick, btnText }) => (
    <div className="input-box w-sm-100 pb-1">
            <input                
                {...input}                
                type={type}
                className={inputClass}
                required
                id="inpu1"
            /> 
        <label className="md-label" htmlFor="input1">{label}</label>
            {
                !pristine && <button className="btn-input-reset close" type="reset" onClick={btnOnClick} disabled={btnDisabled}>
                                {btnText}
                            </button>
            }           
            
            {touched && error && <div className="error-message">{error}</div>}
        </div>
);



class BaseForm extends Component {
    submit = val => {
        const { handleFormSubmit } = this.props;
        handleFormSubmit(val.formInput);
    };

    handleReset = () => {
        const { reset, resetAction } = this.props;
        reset();
        resetAction();
    };

    render() {
        const {
            handleSubmit,
            loading,
            result,
            invalid,
            pristine
        } = this.props;

        const loader = <div className="loader-wrap">
            <div className="cs-loader-inner">
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
            </div>
        </div>

        let resultBox;

        if(result != null) {
            resultBox = <div className="py-4 font-em-4">{result}</div>
            $('#resultModal').modal('toggle'); 
        }
        return (
            <div>
                { loading && loader }               
                
                <form
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap"
                    onSubmit={handleSubmit(this.submit)}
                >
                    <Field
                        name="formInput"
                        component={renderField}
                        type="text"
                        label="Fill in any letter or number"
                        inputClass="main-input md-input"
                        btnOnClick={this.handleReset} 
                        btnDisabled={pristine || loading}     
                        btnText={<span aria-hidden="true">&times;</span>}                  
                    />
                    <div className="btn-box pl-0 pl-sm-4 pt-4 pt-sm-0 w-sm-100">
                            <button
                                className="btn-purple btn-solid btn-round"
                                type="submit"
                                disabled={invalid || loading}                            
                            >
                                Submit
                            </button>
                    </div>               
                </form>
                
                <div className="modal fade" id="resultModal" tabIndex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content text-center">                            
                            <h3 className="pt-5 pb-4" id="resultModalLabel">Your result is:</h3>  

                                {resultBox}

                            <div className="pt-4 pb-5 px-5">
                                <button type="button" className="btn-purple btn-solid btn-round btn-size-m" data-dismiss="modal" onClick={this.handleReset}>Close</button>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    handleFormSubmit: value => dispatch(submitForm(value)),
    resetAction: () => dispatch(resetForm()),
});

const mapStateToProps = state => ({
    result: state.app.result,
    loading: state.app.loading,
});

BaseForm = reduxForm({
    form: 'baseForm',
    validate,
})(BaseForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseForm);