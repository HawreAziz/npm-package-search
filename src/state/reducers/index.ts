import { combineReducers } from 'redux';
import { packageReducer } from './packageReducer';
import { StateProps } from './packageReducer';


interface CombinedState {
    packages: StateProps;
}

const reducers = combineReducers<CombinedState>({
    packages: packageReducer
});


export type RootState = ReturnType<typeof reducers>;

export { reducers };
