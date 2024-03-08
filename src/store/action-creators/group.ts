import { Dispatch } from 'redux';
import { GroupAction, GroupActionTypes } from '../../types/group';

export const fetchGroups = (url: string) => {
    return async (dispatch: Dispatch<GroupAction>) => {
        try {
            dispatch({
                type: GroupActionTypes.FETCH_GROUPS,
            });
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так');
            }
            setTimeout(() => {
                dispatch({
                    type: GroupActionTypes.FETCH_GROUPS_SUCCESS,
                    payload: data,
                });
            }, 1000);
        } catch (e) {
            dispatch({
                type: GroupActionTypes.FETCH_GROUPS_ERROR,
                payload: 'Произошла ошибка при загрузке данных',
            });
        }
    };
};

export const filterGroupsByColor = (color: string) => {
    return (dispatch: Dispatch<GroupAction>) => {
        dispatch({
            type: GroupActionTypes.FILTER_GROUPS_BY_COLOR,
            payload: color
        })
    }
}

export const filterGroupsByOpenness = (state: string) => {
    return (dispatch: Dispatch<GroupAction>) => {
        dispatch({
            type: GroupActionTypes.FILTER_GROUPS_BY_OPENNESS,
            payload: state
        })
    }
}

export const filterGroupsByFriends = (friends: string) => {
    return (dispatch: Dispatch<GroupAction>) => {
        dispatch({
            type: GroupActionTypes.FILTER_GROUPS_BY_FRIENDS,
            payload: friends
        })
    }
}

export const filterGroups = () => {
    return (dispatch: Dispatch<GroupAction>) => {
        dispatch({
            type: GroupActionTypes.FILTER_GROUPS
        })
    }
}