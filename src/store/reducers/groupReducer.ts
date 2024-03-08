import { GroupAction, GroupActionTypes, GroupState, GroupType } from '../../types/group';
import { filterByColor } from '../../utils/FilterByColor';
import { filterByFriends } from '../../utils/FilterByFriends';
import { filterByOpenness } from '../../utils/FilterByOpenness';

const initialState: GroupState = {
    groups: [],
    loading: false,
    error: null,
    filteredGroups: [],
    friends: 'all',
    color: 'all',
    openness: 'all',
};

export const groupReducer = (
    state = initialState,
    action: GroupAction
): GroupState => {
    switch (action.type) {
        case GroupActionTypes.FETCH_GROUPS:
            return {
                ...state,
                groups: [],
                loading: true,
                error: null,
                filteredGroups: [],
            };
        case GroupActionTypes.FETCH_GROUPS_SUCCESS:
            return {
                ...state,
                groups: action.payload,
                loading: false,
                error: null,
                filteredGroups: action.payload
            };
        case GroupActionTypes.FETCH_GROUPS_ERROR:
            return {
                ...state,
                groups: [],
                loading: false,
                error: action.payload,
                filteredGroups: [],
            };
        case GroupActionTypes.FILTER_GROUPS_BY_COLOR:
            return {
                ...state,
                color: action.payload
            };
        case GroupActionTypes.FILTER_GROUPS_BY_FRIENDS:
            return {
                ...state,
                friends: action.payload
            };
        case GroupActionTypes.FILTER_GROUPS_BY_OPENNESS:
            return {
                ...state,
                openness: action.payload
            };
        case GroupActionTypes.FILTER_GROUPS:
            let result = state.groups
            result = filterByColor(result, state.color)
            result = filterByFriends(result, state.friends) 
            result = filterByOpenness(result, state.openness)
            return {
                ...state,
                filteredGroups: result
            };
        default:
            return state;
    }
};
