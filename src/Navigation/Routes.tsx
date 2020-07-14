import React from 'react';
import { View } from "react-native";
import { styles } from '../Styles';
import Home from '../Components/Home';
import SideBar from '../Components/SideBar';

interface Props {}

interface State {}

class Routes extends React.Component<Props, State> {
    render() {
        return (
            <View 
            style={styles.routeContainer}>
                <View style={styles.routeInnerContainer}>
                    <SideBar />
                    <Home />
                </View>
            </View>
        )
    }
}

export default Routes;