const initialState = {
    response1: {},
    response2: {},
    response3: {},
    result: null,
    loading: false,
    error: false,    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PERSON':
            return {
                ...state,
                response1: action.payload,
            };
        case 'GET_FACILITY':
            return {
                ...state,
                response2: action.payload,
            };
        case 'GET_EXPOSURE':
            return {
                ...state,
                response3: action.payload,
            };
        case 'MULTIPLY_VALUES':
            return {
                ...state,
                result: action.payload,
                loading: false,
            };
        case 'ERROR':
            return {
                ...state,
                error: true,
            };
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'RESET':
            return {
                ...initialState,
            };
        default:
            return state;
    }
};