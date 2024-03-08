import { GroupType } from "../types/group";



export const filterByColor = (groups: GroupType[], color: string): GroupType[] => {
    if (color === 'all') {
        return groups;
    }
    return groups.filter((group) => {
        return group.avatar_color === color
    });
}