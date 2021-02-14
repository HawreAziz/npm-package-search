import axios from 'axios';
import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions'


interface PackageContent {
    package: { name: string };

}

interface ObjectsContent {
    objects: PackageContent[]
}

export const searchPackages = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_PACKAGE
        });
        try {
            const { data } = await axios.get<ObjectsContent>('https://registry.npmjs.com/-/v1/search',
                {
                    params: {
                        text: term
                    }
                });
            const packages = data.objects.map((_package: PackageContent) => _package.package.name)
            dispatch({
                type: ActionTypes.SEARCH_PACKAGE_SUCCESS,
                payload: packages
            })
        } catch (error) {
            dispatch({
                type: ActionTypes.SEARCH_PACKAGE_ERROR,
                payload: error.message
            })
        }
    }
}