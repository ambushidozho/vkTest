export type GroupType = {
    id: string;
    name: string;
    closed: string;
    avatar_color: string;
    members_count: number;
    friends?: User[];
};

export type User = {
    first_name: string;
    last_name: string;
};

export interface GroupState {
    groups: GroupType[];
    loading: boolean;
    error: null | string;
    filteredGroups: GroupType[],
    friends: string,
    color: string,
    openness: string,
}

export enum GroupActionTypes {
    FETCH_GROUPS = 'FETCH_GROUPS',
    FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS',
    FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR',
    FILTER_GROUPS_BY_FRIENDS = 'FILTER_GROUPS_BY_FRIENDS',
    FILTER_GROUPS_BY_COLOR = 'FILTER_GROUPS_BY_COLOR',
    FILTER_GROUPS_BY_OPENNESS = 'FILTER_GROUPS_BY_OPENNESS',
    FILTER_GROUPS = 'FILTER_GROUPS',
}

interface FetchGroupsAction {
    type: typeof GroupActionTypes.FETCH_GROUPS;
}

interface FetchGroupsSuccessAction {
    type: typeof GroupActionTypes.FETCH_GROUPS_SUCCESS;
    payload: GroupType[];
}

interface FetchGroupsErrorAction {
    type: typeof GroupActionTypes.FETCH_GROUPS_ERROR;
    payload: string;
}

interface FilterGroupsByFriendsAction {
    type: typeof GroupActionTypes.FILTER_GROUPS_BY_FRIENDS;
    payload: string
}

interface FilterGroupsByColorAction {
    type: typeof GroupActionTypes.FILTER_GROUPS_BY_COLOR;
    payload: string
}

interface FilterGroupsByStateAction {
    type: typeof GroupActionTypes.FILTER_GROUPS_BY_OPENNESS;
    payload: string
}
interface FilterGroups {
    type: typeof GroupActionTypes.FILTER_GROUPS;
}

export type GroupAction =
    | FetchGroupsAction
    | FetchGroupsSuccessAction
    | FetchGroupsErrorAction
    | FilterGroupsByFriendsAction
    | FilterGroupsByColorAction
    | FilterGroupsByStateAction
    | FilterGroups;
