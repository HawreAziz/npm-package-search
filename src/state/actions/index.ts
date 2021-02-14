import { ActionTypes } from '../action-types';

interface SearchPackageAction {
    type: ActionTypes.SEARCH_PACKAGE;
}

interface SearchSuccesAction {
    type: ActionTypes.SEARCH_PACKAGE_SUCCESS;
    payload: string[];
}


interface SearchErrorAction {
    type: ActionTypes.SEARCH_PACKAGE_ERROR;
    payload: string;
}


export type Action = SearchPackageAction | SearchSuccesAction | SearchErrorAction;
