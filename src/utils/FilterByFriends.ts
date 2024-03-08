import { GroupType } from "../types/group";



export const filterByFriends = (groups: GroupType[], friends: string): GroupType[] => {
    switch (friends) {
        case 'yes':
            return groups.filter((group) => {
                return group.friends !== undefined
            });
        case 'no':
            return groups.filter((group) => {
                return group.friends === undefined
            });
        case 'all':
            return groups;
        default:
            break;
    }
    return []
}