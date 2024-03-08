import React from 'react'
import { View, Panel, Group, FormItem, Header, FormLayoutGroup, RadioGroup, Radio } from '@vkontakte/vkui';
import { useAppDispatch } from '../../hooks/useTypedSelectors';
import { filterGroups, filterGroupsByColor, filterGroupsByFriends, filterGroupsByOpenness } from '../../store/action-creators/group';
export default function GroupFilter() {
    const dispatch = useAppDispatch();

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterGroupsByOpenness(event.target.value))
        dispatch(filterGroups())
    }
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterGroupsByColor(event.target.value))
        dispatch(filterGroups())
    } 
    const handleFriendsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterGroupsByFriends(event.target.value))
        dispatch(filterGroups())
    } 


    return (
        <View activePanel="panel">
            <Panel id="panel">
                <Group header={<Header>Фильтры</Header>}>
                    <FormLayoutGroup mode="horizontal">
                        <FormItem top="Статус группы">
                            <RadioGroup mode='vertical' onChange={handleStateChange}>
                                <Radio name="state" value="all" defaultChecked>
                                    Все
                                </Radio>
                                <Radio name="state" value="open">
                                    Открытая
                                </Radio>
                                <Radio name="state" value="closed">
                                    Закрытая
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem top="Цвет аватарки">
                            <RadioGroup mode='vertical' onChange={handleColorChange}> 
                                <Radio name="color" value="all" defaultChecked>
                                    Любой
                                </Radio>
                                <Radio name="color" value="yellow">
                                    Желтый
                                </Radio>
                                <Radio name="color" value="green">
                                    Зеленый
                                </Radio>
                                <Radio name="color" value="red">
                                    Красный
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem>
                            <RadioGroup mode='vertical' onChange={handleColorChange}> 
                                <Radio name="color" value="blue">
                                    Синий
                                </Radio>
                                <Radio name="color" value="white">
                                    Белый
                                </Radio>
                                <Radio name="color" value="orange">
                                    Оранжевый
                                </Radio>
                                <Radio name="color" value="purple">
                                    Розовый
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem top="Наличие друзей">
                            <RadioGroup mode='vertical' onChange={handleFriendsChange}>
                                <Radio name='friends' value="all" defaultChecked>
                                    Все
                                </Radio>
                                <Radio name='friends' value="yes"> 
                                    Есть
                                </Radio>
                                <Radio name='friends' value="no">
                                    Нет
                                </Radio>
                            </RadioGroup>
                        </FormItem>
                    </FormLayoutGroup>
                </Group>
            </Panel>
        </View>
    )
}
