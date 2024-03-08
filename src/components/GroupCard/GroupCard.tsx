import React from 'react'
import { GroupType } from '../../types/group'
import { View, Panel, Group, SimpleCell, PanelHeaderBack, Header, ConfigProvider } from '@vkontakte/vkui';
import ColorCircle from '../ColorCircle/ColorCircle';

export default function GroupCard(props: GroupType) {

  const [activePanel, setActivePanel] = React.useState('list');

  return (
    <ConfigProvider transitionMotionEnabled={false}>
      <View activePanel={activePanel} id={props.id} style={{ width: '250px', height: '250px', position: 'relative' }} >
      <Panel id="list">
        <Group header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', backgroundColor: '#e2e1e1', borderRadius: '10px' }}><ColorCircle color={props.avatar_color}/><Header mode="primary">{props.name}</Header></div>}>
          <SimpleCell indicator={props.closed ? 'Закрыта' : 'Открыта'}>
            Тип приватности 
          </SimpleCell>
          <SimpleCell indicator={props.members_count}>
            Количество участников
          </SimpleCell>
          <SimpleCell indicator={props.friends?.length || 0} onClick={() => setActivePanel('friends')}>
            Количество друзей
          </SimpleCell>
        </Group>
      </Panel>
      <Panel id="friends">
      <Group header={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}><PanelHeaderBack onClick={() => setActivePanel('list')} /><Header mode="primary"> Друзья</Header></div>}>
          {props.friends === undefined && <SimpleCell>Нет друзей</SimpleCell>}
          {props.friends?.map((friend) => (
            <SimpleCell>
              {friend.first_name} {friend.last_name}
            </SimpleCell>
          ))}
        </Group>
      </Panel>
    </View>
  </ConfigProvider>
  )
}
