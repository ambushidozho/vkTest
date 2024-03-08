import { GroupType } from "../types/group";



export const filterByOpenness = (groups: GroupType[], openness: string): GroupType[] => {
    switch (openness) {
        case 'open':
            return groups.filter((group) => {
                return !group.closed
            });
        case 'closed':
            return groups.filter((group) => {
                return group.closed
            });
        case 'all':
            return groups;
        default:
            break;
    }
    return []
}