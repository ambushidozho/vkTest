import { combineReducers } from 'redux';
import { groupReducer } from './groupReducer';

export const rootReducer = combineReducers({
    group: groupReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
