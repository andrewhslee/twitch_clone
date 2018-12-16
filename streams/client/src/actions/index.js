import streams from '../apis/streams';

import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from './types';

export const signIn = (userId) => {
    return ({
        type: SIGN_IN,
        payload: userId,
    });
};

export const signOut = () => {
    return ({
        type: SIGN_OUT,
    });
};

export const createStream = (formValues) => {
    return async (dispatch, getState ) => {
        const { userId } = getState().auth;
        const resp = await streams.post('/streams', { ...formValues, userId })
        dispatch({ type: CREATE_STREAM, payload: resp.data })
    };
}

export const getStream = (id) => {
    return async (dispatch) => {
        const resp = await streams.get(`/streams/${id}`)
        dispatch({ type: FETCH_STREAM, payload: resp.data })
    };
}

export const getStreams = () => {
    return async (dispatch) => {
        const resp = await streams.get('/streams')
        dispatch({ type: FETCH_STREAMS, payload: resp.data })
    };
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const resp = await streams.put(`/streams/${id}`, formValues)
        dispatch({ type: EDIT_STREAM, payload: resp.data })
    };
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.post(`/streams/${id}`)
        dispatch({ type: DELETE_STREAM, payload: id })
    };
}