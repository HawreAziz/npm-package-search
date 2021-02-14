import { ActionTypes } from '../action-types';
import { Action } from '../actions';





export interface StateProps {
    loading: boolean;
    error: string | null;
    data: string[];
}


const INITIAL_STATE = { loading: false, error: null, data: [] };

export const packageReducer = (state: StateProps = INITIAL_STATE, action: Action): StateProps => {
    switch (action.type) {
        case ActionTypes.SEARCH_PACKAGE:
            return { loading: true, error: null, data: [] };
        case ActionTypes.SEARCH_PACKAGE_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionTypes.SEARCH_PACKAGE_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}