import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import GroupCard from '../GroupCard/GroupCard';
import { fetchGroups } from '../../store/action-creators/group';
import { URL } from '../../Constants/constants';

export default function GroupList() {

    const { filteredGroups, error, loading } = useAppSelector(state => state.group)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGroups(URL));
    }, []);


    if (loading) {
        return <h1 className="big-text">Loading...</h1>;
    }

    if (error) {
        return <h1 className="big-text">{error}</h1>;
    }

    return (
        <div className="groupsList">
            {filteredGroups.length === 0 && <h1 className="big-text">Ничего не найдено</h1>}
            {filteredGroups.map((group) => (
                <GroupCard key={group.id} {...group} />
            ))}
        </div>
    );
}
