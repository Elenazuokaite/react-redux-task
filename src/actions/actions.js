import { getPerson, getFacility, getExposure } from '../utils/mock';

const getResponsePerson = data => ({
    type: 'GET_PERSON',
    payload: data,
});

const getResponseFacility = data => ({
    type: 'GET_FACILITY',
    payload: data,
});

const getResponseExposure = data => ({
    type: 'GET_EXPOSURE',
    payload: data,
});

const multiply = (a, b) => ({
    type: 'MULTIPLY_VALUES',
    payload: a * b,
});

const loading = () => ({
    type: 'LOADING',
});

const setError = error => ({
    type: 'ERROR',
    error,
});

const resetForm = () => ({
    type: 'RESET',
});

const submitForm = val => (dispatch, getState) => {
    dispatch(loading());
    getPerson(val)
        .then(res => {
            dispatch(getResponsePerson(res.data));
            return getFacility(res.data.val1);
        })
        .then(res => {
            dispatch(getResponseFacility(res.data));
            return getExposure(getState().app.response1.val2);
        })
        .then(res => {
            dispatch(getResponseExposure(res.data));
            const val2 = getState().app.response2.val3;
            const val5 = getState().app.response3.val5;
            dispatch(multiply(val2, val5));
        })
        .catch(err => dispatch(setError(err)));
};

export { submitForm, resetForm };