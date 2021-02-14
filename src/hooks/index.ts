import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../state';
import { RootState } from '../state';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actioncreators, dispatch);
}


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


