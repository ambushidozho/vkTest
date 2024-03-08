import '@vkontakte/vkui/dist/vkui.css';
import './css/styles.css';
import './css/normalize.css';
import GroupList from './components/GroupList/GroupList';
import GroupFilter from './components/GroupFilter/GroupFilter';
export default function App() {
    return (
        <>
        <GroupFilter />
        <GroupList />
        </>
    );
}
