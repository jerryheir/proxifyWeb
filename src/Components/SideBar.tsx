import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleMenu, setScreen } from '../Actions/mainAction';
import ListItemAtom from '../Atoms/ListItemAtom';
import { styles } from '../Styles';

const LIST = ["Start", "Your Cart", "Favourites", "Your Orders"];

const SideBar = () => {
    const [active, setStateActive] = useState(0);
    const dispatch = useDispatch();
    const setActive = (active: number) => {
        setStateActive(active);
        dispatch(setScreen(LIST[active]));
        if (active === 0 || active === LIST.length){
            dispatch(toggleMenu());
            dispatch(setScreen(LIST[0]));
            setStateActive(0);
        }
    }
    return (
        <View style={styles.sideBarContainer}>
            <View>
                <Text style={styles.sideBarName}>{'Viktor'}</Text>
            </View>
            {
                LIST.map((item, key)=>{
                    return (
                        <ListItemAtom 
                        key={key}
                        active={active}
                        index={key}
                        title={item}
                        onPress={setActive}
                        />
                    )
                })
            }
            <View 
            style={styles.sideBarLine}
            />
            <ListItemAtom 
            active={active}
            index={LIST.length}
            title={'Sign Out'}
            onPress={()=>setActive(LIST.length)}
            />
        </View>
    )
}

export default SideBar;
